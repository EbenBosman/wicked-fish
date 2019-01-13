import React from 'react';
import { connect } from 'react-redux';
import { nextStep, previousStep, skipToStep, setupWizard } from '../../actions/wizard';

import "../../styles/components/wizard.scss";

class WizardSteps extends React.Component {
	constructor(props) {
        super(props);
    }

    handleNext = e => {
        e.stopPropagation();
        if(e.target.className.indexOf('disabled') <= 0)
            this.props.dispatch(nextStep());
    };

    handleBack = e => {
        e.stopPropagation();
        this.props.dispatch(previousStep());
    };

    handleSkipToStep = e => {
        const stepNumber = parseInt(e.target.getAttribute('data-step-number'));
        const stepName = e.target.getAttribute('data-step-name');

        if(!this.isTabDisabled(stepName))
            this.props.dispatch(skipToStep(stepNumber, stepName));
    };

    handleDone = (e) => {
        e.stopPropagation();
        const steps = this.props.resetAll();
        this.props.dispatch(setupWizard(steps, this.props.doneUrl));
        const firstStep = steps.find(step => step.order_number === 1);
        this.props.dispatch(skipToStep(1, firstStep.name));
        this.props.history.push(this.props.doneUrl);
    };

    handleStartOver = (e) => {
        e.stopPropagation();
        const steps = this.props.resetAll();
        this.props.dispatch(setupWizard(steps, this.props.doneUrl));
        const firstStep = steps.find(step => step.order_number === 1);
        this.props.dispatch(skipToStep(1, firstStep.name));
    }

    getCurrentStep = () => {
        if(this.props.stepHistory && this.props.stepHistory.length >= 1) {
            let latestStep = this.props.stepHistory.sort((a, b) => a.timeStamp - b.timeStamp).reverse()[0];
            return this.props.steps.find(step => step.name === latestStep.name)
        }

        const firstStep = this.props.steps[0];
        return { order_number: 1, name: firstStep.Name };
    };

    isTabDisabled = (stepName) => {
        return !this.props.steps.find(x => x.name === stepName).active;
    }

    generateWizardHeader = () => {
        let currentStep = this.getCurrentStep();
        return (
            <div className="nav nav-tabs" role="tablist">
                {
                    this.props.steps
                        .sort((a, b) => a.order_number - b.order_number)
                        .map(element => {
                            const elementStepNumber = parseInt(element.order_number);
                            const elementStepName = element.name;
                            const active = currentStep.order_number === elementStepNumber ? 'active' : '';
                            const ariaSelected = currentStep.order_number === elementStepNumber;
                            const sanatizedPageName = element.text.toLowerCase().replace(/ /g, '-');
                            const sanatizedHref = `${window.location.pathname}/${sanatizedPageName}`;
                            const disabled = this.isTabDisabled(element.name) ? 'disabled' : '';
                            return (
                                <a
                                    key={`${elementStepNumber}_${element.text.toLowerCase().replace(/ /g, '_')}`}
                                    className={`nav-item nav-link ${active} ${disabled}`}
                                    onClick={this.handleSkipToStep}
                                    data-step-number={elementStepNumber}
                                    data-step-name={elementStepName}
                                    data-toggle="tab"
                                    href={sanatizedHref}
                                    role="tab"
                                    aria-controls={`nav-${sanatizedPageName}`}
                                    aria-selected={ariaSelected}>
                                    {`${elementStepNumber}. ${element.text}`}
                                </a>
                            )
                        })
                }
            </div>
        );
    };

    generateWizardBody = () => {
        let currentStep = this.getCurrentStep();
        return (
            this.props.steps
                .sort((a, b) => a.order_number - b.order_number)
                .map(stepElement => {
                    const stepElementOrderNumber = parseInt(stepElement.order_number);
                    const stepStyle = {
                        display: currentStep.order_number === stepElementOrderNumber ? 'block' : 'none'
                    };
                    return (
                        <div key={`step-body-${stepElement.name}-wrapper`} style={stepStyle} className="">
                            <stepElement.src key={`step-body-${stepElement.name}-content`} />
                        </div>
                    )
                })
        );
    };

    generateStartOverButton = () => {
        return <button type="button" className={`btn btn-light btn-lg`} onClick={this.handleStartOver}>Start Over</button>
    }

    generateBackButton = () => {
        let currentStep = this.getCurrentStep();
        if (currentStep.order_number !== 1) {
            return <button type="button" className={`btn btn-secondary btn-lg`} onClick={this.handleBack}>Back</button>
        }
        return;
    };

    generateNextButton = () => {
        let currentStep = this.getCurrentStep();
        if (currentStep.order_number >= 1 && currentStep.order_number < this.props.steps.length) {
            const enabled = currentStep.is_next_enabled ? '' : 'disabled';
            return <button type="button" className={`btn btn-primary btn-lg ${enabled}`} onClick={this.handleNext}>Next</button>;
        }
        return;
    };

    generateDoneButton = () => {
        let currentStep = this.getCurrentStep();
        if (currentStep.order_number === this.props.steps.length) {
            return <button type="button" className={`btn btn-success btn-lg`} onClick={this.handleDone}>Done</button>;
        }
        return;
    };

    render() {
        return (
            <div>
                <nav>
                    { this.generateWizardHeader() }
                </nav>
                <div className="tab-content box-shadow tab-content-container">
                    <div className="p-4">
                        { this.generateWizardBody() }
                        <hr />
                        <div className="tab-content-container-footer">
                            <div className="btn-group btn-group-lg float-left" role="group" aria-label="wizard-helper-buttons">
                                {this.generateStartOverButton()}
                            </div>
                            <div className="btn-group btn-group-lg float-right" role="group" aria-label="wizard-main-buttons">
                                {this.generateBackButton()}
                                {this.generateNextButton()}
                                {this.generateDoneButton()}
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stepHistory: state.wizard.step_history,
        steps: state.wizard.steps,
        doneUrl: state.wizard.done_url
     };
}

export default connect(mapStateToProps)(WizardSteps);