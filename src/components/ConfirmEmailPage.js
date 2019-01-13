import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { startTimer, updateTimer, clearTimer } from '../actions/timer';
import { displayAlert } from '../actions/alerts';
import Alerts from '../components/controls/Alerts';
import API from './utilities/API';
import AlertSeverity from './utilities/AlertSeverity';

import SignatureLogo from '../components/molecules/SignatureLogo';
import Signature from '../components/molecules/Signature';

import '../styles/components/anonymous.scss';

const timeoutInSeconds = 30;

class ConfirmEmailPage extends React.Component {
    constructor(props) {
        super(props);
	}

	componentDidMount() {
		this.confirmEmail();
		this.unloadScrollBars();
		this.props.dispatch(startTimer(timeoutInSeconds));
		setTimeout(this.runTimer, 1000);
	}

	confirmEmail = () => {
		const _this = this;

		const confirmEmail = {
			Email: decodeURIComponent(this.props.match.params.email),
			Token: decodeURIComponent(this.props.match.params.token)
		};

		// API()
		// 	.post('/api/auth/confirm-email', confirmEmail)
        //     .then(function(response) {
		// 		if(response.status !== 200)
		// 			throw new Error();
        //     })
        //     .catch(error => {
		// 		if(error.response.status !==  500) {
		// 			if (!Array.isArray(error.response.data)) {
		// 				if(typeof(error.response.data.Email) !== 'undefined')
		// 					for(let errorInEmail of error.response.data.Email) {
		// 						_this.props.dispatch(displayAlert(errorInEmail, AlertSeverity.Warning));
		// 					}
		// 				else if(typeof(error.response.data.Token) !== 'undefined')
		// 					for(let errorInToken of error.response.data.Token) {
		// 						_this.props.dispatch(displayAlert(errorInToken, AlertSeverity.Warning));
		// 					}
		// 			} else {
		// 				for(let errorResponseData of error.response.data) {
		// 					_this.props.dispatch(displayAlert(errorResponseData.description, AlertSeverity.Warning));
		// 				}
		// 			}
		// 		} else
		// 			_this.props.dispatch(displayAlert('Your email address could not be verified. Please click on the link in the email sent to you and try again.', AlertSeverity.Error));
        //     });
	}

	unloadScrollBars = () => {
		document.documentElement.style.overflow = 'hidden';
	}

	reloadScrollBars = () => {
		document.documentElement.style.overflow = 'auto';
	}

	runTimer = () => {
		if (this.props.timer.seconds_left - 1 <= 0) {
			this.props.dispatch(clearTimer());
			this.reloadScrollBars();
			this.props.history.push('/');
		}

		this.props.dispatch(updateTimer());
		setTimeout(this.runTimer, 1000);
	};

    render() {
        return (
			<div className="form-login-wrapper w-100">
                <Alerts />
				<div className="row h-100">
					<div className="col-sm-12 align-vertical-custom">
						<div className="row">
							<div className="col-sm-12 d-flex justify-content-center">
								<SignatureLogo />
							</div>
						</div>
						<div className="row pb-5">
							<div className="col-sm-12 d-flex justify-content-center">
								<form name="login-form" className="form-login p-5">
									<div className="row pb-3">
										<div className="col-sm-12">
											<p className="lead text-center">
												<small>Thank you for completing the registration process. Only one step remain.</small>
											</p>
											<p className="lead text-center">
												<small>Please click the button below and log in. Alternatively you will be redirected to the home page in {timeoutInSeconds} seconds.</small>
											</p>
										</div>
									</div>
									<div className="row pb-4">
										<div className="col-sm-12">
											<Link to="/" className="btn btn-lg btn-primary btn-block">Redirecting to Home Page in {this.props.timer.seconds_left}s</Link>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 d-flex justify-content-center">
								<Signature />
							</div>
						</div>
					</div>
				</div>
			</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        timer: state.timer
    }
};

export default withRouter(connect(mapStateToProps)(ConfirmEmailPage));
