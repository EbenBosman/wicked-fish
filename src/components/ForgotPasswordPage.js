import React from 'react';
import { connect } from 'react-redux';
import { displayAlert } from '../actions/alerts';
import { Link } from 'react-router-dom';
import Alerts from '../components/controls/Alerts';
import API from './utilities/API';
import AlertSeverity from './utilities/AlertSeverity';

import SignatureLogo from '../components/molecules/SignatureLogo';
import Signature from '../components/molecules/Signature';

import '../styles/components/anonymous.scss';

class ForgotPasswordPage extends React.Component {
    constructor(props) {
        super(props);
	}

	componentDidMount() {
		this.unloadScrollBars();
	};

	unloadScrollBars = () => {
		document.documentElement.style.overflow = 'hidden';
	}

	submitForgotPassword = e => {
		e.preventDefault();

		const registrationData = {
			Email: e.target.elements.email.value
		};

		const button = document.getElementById('btnReset');
		button.classList.add('disabled');
		button.innerHTML = 'Requesting Password Reset';

		const _this = this;

		// API()
		// 	.post('/api/auth/forgot-password', registrationData)
        //     .then(function(response) {
		// 		if(response.status !== 200) {
		// 			throw new Error();
		// 		}
		// 		else if (button) {
		// 			button.innerHTML = 'Please Check Your Email';
		// 			_this.props.dispatch(displayAlert("We sent an email to you to verify your identity. Please follow the link inside to complete the process.", AlertSeverity.Info))
		// 		}
        //     })
        //     .catch((e) => {
		// 		console.error(e);
		// 		_this.props.dispatch(displayAlert('Something went wrong trying to reset your password. Please try again.', AlertSeverity.Error));
        //     })
		// 	.then(() => {
		// 		setTimeout(() => {
		// 			if (button) {
		// 				button.classList.remove('disabled');
		// 				button.innerHTML = 'Reset Password';
		// 			}
		// 			_this.props.history.push('/');
		// 		}, 5000);
		// 	});
	}

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
								<form name="login-form" className="form-login p-5" onSubmit={this.submitForgotPassword}>
									<div className="row pb-3">
										<div className="col-sm-12">
											<p className="lead text-center">
												<small>
													To reset your password, please provide us with the email address which you used to register. We will send an email to you to verify your identity.
													<br/>
													Please follow the link in the email and provide us with a new password to access the site when you are done.
												</small>
											</p>
										</div>
									</div>
									<div className="row pb-3">
										<div className="col-sm-12">
											<input type="email" name="email" className="form-control text-input-custom" placeholder="Email Address" required autoFocus htmlFor="Email" />
										</div>
									</div>
									<div className="row pb-4">
										<div className="col-sm-12">
											<button className="btn btn-lg btn-primary btn-block" type="submit" id="btnReset">Reset Password</button>
										</div>
									</div>
									<div className="row">
										<div className="col-sm-12">
											<Link to="/" className="float-sm-left"><small>Log In</small></Link>
											<Link to="/register" className="float-sm-right"><small>Register</small></Link>
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

export default connect()(ForgotPasswordPage);
