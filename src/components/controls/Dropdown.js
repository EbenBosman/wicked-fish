import React from 'react';
import { connect } from 'react-redux';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    getClassName = () => {
        const baseClassName = 'row';

        return this.props.className ? `${baseClassName} ${this.props.className}` : baseClassName;
    }

    getHeading = () => {
        if (!this.props.heading)
            throw 'Please supply a heading for this dropdown.';

        return this.props.heading;
    }

    getTooltip = () => {
        if (this.props.tooltip)
            return this.props.tooltip;

        return '';
    }

    getOptions = () => {
        try {
            if (!this.props.id)
                return <option value="-1">Please supply an id for this dropdown.</option>

            if (!this.props.data || !this.props.data.options || this.props.data.length === 0)
                return <option value="-1">No data available.</option>;

            document.getElementById(this.props.id).removeAttribute('disabled');

            return this.props.data.options
                .map(item => (<option key={`option-${this.props.id}-${item.id}`} value={item.id}>{item.value}</option>));
        } catch (e) {
            return [<option key={`option-${this.props.id}-no-data`} value='-1'>No data available or an error occurred.</option>];
        }
    }

    handleChange = e => {
        e.stopPropagation();
        this.props.onChange(e.target.value);
    }

    render() {
        let selectedValue =
            this.props.value
            ? this.props.value
            : this.props.data
                ? this.props.data.default
                : "";

        return (
            <div className={this.getClassName()}>
                <div className="col-lg-3">{this.getHeading()}</div>
                <div className="col-lg-9 input-group select-options-custom">
                    <select
                        id={this.props.id}
                        name={this.props.id}
                        className="form-control select-options-custom"
                        value={selectedValue}
                        onChange={this.handleChange}
                        disabled>
                        { this.getOptions() }
                    </select>
                    <div className="input-group-append" data-toggle="tooltip" data-placement="left" title={this.getTooltip()}>
                        <div className="input-group-text">
                            <i className="fa fa-info-circle"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Dropdown);