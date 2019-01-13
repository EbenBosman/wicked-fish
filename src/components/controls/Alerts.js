import React from 'react';
import { connect } from 'react-redux';
import { dismissAlert } from '../../actions/alerts';

class Alerts extends React.Component {
    constructor(props) {
        super(props);
    }

    getAlerts = () => {
        if (!this.props.alerts || this.props.alerts.length === 0)
            return null;

        const alertFixed = {
            position:'fixed',
            top: '0px',
            left: '0px',
            width: '100%',
            zIndex: 9999,
            borderRadius: '0px'
        };

        return (
            <div style={alertFixed}>
                {
                    this.props.alerts.map((alert) => {
                        const alertClass = `alert alert-${alert.severity} alert-dismissible m-4`
                        setTimeout(() => {
		                    this.props.dispatch(dismissAlert(alert.id));
                        }, 5000);
                        return (
                            <div key={alert.id} id={alert.id} className={alertClass} role="alert">
                                { alert.message }
                            </div>
                            );
                        }
                    )
                }
            </div>
        );
    }

    render() {
        return this.getAlerts()
    }
}

const mapStateToProps = (state) => {
    return {
        alerts: state.alerts
    }
};

export default connect(mapStateToProps)(Alerts);
