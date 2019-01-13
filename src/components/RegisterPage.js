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

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
	}

	componentDidMount() {
		this.unloadScrollBars();
	}

	register = e => {
		e.preventDefault();

		const registrationData = {
			Email: e.target.elements.email.value,
			Password: e.target.elements.password1.value,
			ConfirmPassword: e.target.elements.password2.value
		};

		const button = document.getElementById('btnRegister');
		button.classList.add('disabled');
		button.innerHTML = 'Getting You Registered';

		const _this = this;

		// API()
		// 	.post('/api/auth/register', registrationData)
        //     .then(response => {
		// 		console.log('response', response);
		// 		if(response.status !== 200) {
		// 			throw new Error();
		// 		}

		// 		if (button) {
		// 			button.innerHTML = 'Registration Successful';
		// 			_this.props.history.push('/registeration-successful')
		// 		}
        //     })
        //     .catch(error => {
		// 		if(error.response.status !==  500) {
		// 			if (!Array.isArray(error.response.data)) {
		// 				if(typeof(error.response.data.Firstname) !== 'undefined')
		// 					for(let errorInFirstname of error.response.data.Firstname) {
		// 						_this.props.dispatch(displayAlert(errorInFirstname, AlertSeverity.Warning));
		// 					}
		// 				else if(typeof(error.response.data.Lastname) !== 'undefined')
		// 					for(let errorInLastname of error.response.data.Lastname) {
		// 						_this.props.dispatch(displayAlert(errorInLastname, AlertSeverity.Warning));
		// 					}
		// 				else if(typeof(error.response.data.Email) !== 'undefined')
		// 					for(let errorInEmail of error.response.data.Email) {
		// 						_this.props.dispatch(displayAlert(errorInEmail, AlertSeverity.Warning));
		// 					}
		// 				else if(typeof(error.response.data.Password) !== 'undefined')
		// 					for(let errorInPassword of error.response.data.Password) {
		// 						_this.props.dispatch(displayAlert(errorInPassword, AlertSeverity.Warning));
		// 					}
		// 				else if(typeof(error.response.data.ConfirmPassword) !== 'undefined')
		// 					for(let errorInConfirmPassword of error.response.data.ConfirmPassword) {
		// 						_this.props.dispatch(displayAlert(errorInConfirmPassword, AlertSeverity.Warning));
		// 					}
		// 			} else {
		// 				for(let errorResponseData of error.response.data) {
		// 					_this.props.dispatch(displayAlert(errorResponseData.description, AlertSeverity.Warning));
		// 				}
		// 			}
		// 		} else
		// 			_this.props.dispatch(displayAlert('The email address you provided could not be found or the password is incorrect. Please try again.', AlertSeverity.Error));
        //     })
		// 	.then(() => {
		// 		if (button) {
		// 			button.classList.remove('disabled');
		// 			button.innerHTML = 'Register';
		// 		}
		// 	});
	}

	unloadScrollBars = () => {
		document.documentElement.style.overflow = 'hidden';
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
								<form name="login-form" className="form-login p-5" onSubmit={this.register}>
									<div className="row pb-3">
										<div className="col-sm-12">
											<p className="lead text-center">
												<small>Choose your password wisely. We recommend one which is at least 6 characters long containing at least one capital letter and one number. Bonus points for adding special characters and choosing a longer password than the minimum required length.</small>
											</p>
										</div>
									</div>
									<div className="row pb-3">
										<div className="col-sm-12">
											<input type="firstName" name="firstName" className="form-control text-input-custom" placeholder="Firstname" required autoFocus />
										</div>
									</div>
									<div className="row pb-3">
										<div className="col-sm-12">
											<input type="lastName" name="lastName" className="form-control text-input-custom" placeholder="Lastname" required />
										</div>
									</div>
									<div className="row pb-3">
										<div className="col-sm-12">
											<input type="email" name="email" className="form-control text-input-custom" placeholder="Email Address" required />
										</div>
									</div>
									<div className="row pb-3">
										<div className="col-sm-12">
											<input type="password" name="password1" className="form-control text-input-custom" placeholder="Password" required />
										</div>
									</div>
									<div className="row pb-3">
										<div className="col-sm-12">
											<input type="password" name="password2" className="form-control" placeholder="Confirm Password" required />
										</div>
									</div>
									<div className="row pb-4">
										<div className="col-sm-12">
											<button className="btn btn-lg btn-primary btn-block" type="submit" id="btnRegister">Register</button>
										</div>
									</div>
									<div className="row">
										<div className="col-sm-12">
											<Link to="/" className="float-sm-left"><small>Log In</small></Link>
											<Link to="/forgot-password" className="float-sm-right"><small>Forgot Password</small></Link>
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

export default connect()(RegisterPage);
