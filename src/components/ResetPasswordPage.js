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

class ResetPasswordPage extends React.Component {
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

		const email = decodeURIComponent(this.props.match.params.email);
		const token = decodeURIComponent(this.props.match.params.token);

		const passwordResetData = {
			Email: email,
			Password: e.target.elements.password1.value,
			ConfirmPassword: e.target.elements.password2.value,
			Code: token
		};

		const button = document.getElementById('btnResetPassword');
		button.classList.add('disabled');
		button.innerHTML = 'Resetting Your Password';

		const _this = this;

		// API()
		// 	.post('/api/auth/reset-password', passwordResetData)
        //     .then(function(response) {
		// 		if(response.status !== 200) {
		// 			throw new Error();
		// 		}

		// 		if (button) {
		// 			button.innerHTML = 'Reset Successful';
		// 			_this.props.dispatch(displayAlert('Your password was successfully reset. You will no be redirected to the log in page.', AlertSeverity.Success));
		// 		}
        //     })
        //     .catch((e) => {
		// 		console.error(e);
		// 		_this.props.dispatch(displayAlert('The email address you provided could not be found or the password is incorrect. Please try again.', AlertSeverity.Error));
        //     })
		// 	.then(() => {
		// 		setTimeout(() => {
		// 			if (button) {
		// 				button.classList.remove('disabled');
		// 				button.innerHTML = 'Reset Password';
		// 			}
		// 			_this.props.history.push('/');
		// 		}, 3000);
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
												<small>Choose your new password wisely. We recommend one which is at least 6 characters long containing at least one capital letter and one number. Bonus points for adding special characters and choosing a longer password than the minimum required length.</small>
											</p>
											<p className="lead text-center">
												<small>Once your password has been reset, you will be redirected to the log in page. Then, please enter your username and new password to log in.</small>
											</p>
										</div>
									</div>
									<div className="row pb-3">
										<div className="col-sm-12">
											<input type="password" name="password1" className="form-control text-input-custom" placeholder="New Password" required autoFocus />
										</div>
									</div>
									<div className="row pb-3">
										<div className="col-sm-12">
											<input type="password" name="password2" className="form-control text-input-custom" placeholder="Repeat Password" required />
										</div>
									</div>
									<div className="row pb-4">
										<div className="col-sm-12">
											<button className="btn btn-lg btn-primary btn-block" type="submit" id="btnResetPassword">Reset Password</button>
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

export default connect()(ResetPasswordPage);
