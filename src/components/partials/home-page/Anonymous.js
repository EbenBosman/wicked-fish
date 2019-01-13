import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loggedIntoApi } from '../../../actions/authentication';
import { displayAlert } from '../../../actions/alerts';
import API from '../../utilities/API';
import AlertSeverity from '../../utilities/AlertSeverity';

import SignatureLogo from '../../molecules/SignatureLogo';
import Signature from '../../molecules/Signature';

import '../../../styles/components/anonymous.scss';

export class AnonymousPartialPage extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.unloadScrollBars();
	}

	unloadScrollBars = () => {
		document.documentElement.style.overflow = 'auto';
		document.documentElement.style.overflowX = 'hidden';
	}

	logIn = e => {
		e.preventDefault();

		const loginData = {
			Email: e.target.elements.userName.value,
			Password: e.target.elements.password.value
		};

		const button = document.getElementById('btnLogIn');
		button.classList.add('disabled');
		button.innerHTML = 'Logging You In';

		const _this = this;

		// API()
		// 	.post('/api/auth/login', loginData)
        //     .then((response) => {
		// 		if(response.status !== 200)
		// 			throw new Error();

		// 		if(response.status === 200 && response.data && response.data.jwt) {
		// 			_this.props.dispatch(loggedIntoApi(response.data));
		// 		}
        //     })
        //     .catch(error => {
		// 		if (error.response.status === 400) {
		// 			if (typeof(error.response.data) !== 'undefined') {
		// 				_this.props.dispatch(displayAlert(error.response.data, AlertSeverity.Warning));
		// 			}
		// 		}
		// 		else if (error.response.status !== 500) {
		// 			if (!Array.isArray(error.response.data)) {
		// 				if(typeof(error.response.data.Email) !== 'undefined')
		// 					for(let errorInEmail of error.response.data.Email) {
		// 						_this.props.dispatch(displayAlert(errorInEmail, AlertSeverity.Warning));
		// 				}
		// 				else if(typeof(error.response.data.Password) !== 'undefined')
		// 					for(let errorInPassword of error.response.data.Password) {
		// 						_this.props.dispatch(displayAlert(errorInPassword, AlertSeverity.Warning));
		// 				}
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
		// 			button.innerHTML = 'Log In';
		// 		}
		// 	});
	};




	// <div className="row pb-5">
	// 	<div` className="col-sm-12 d-flex justify-content-center">
	// 		<form name="login-form" className="form-login box-shadow p-5" onSubmit={this.logIn}>
	// 			<div className="row pb-3">
	// 				<div className="col-sm-12">
	// 					<input type="email" name="userName" className="form-control text-input-custom" placeholder="Email Address" required autoFocus htmlFor="Email" />
	// 				</div>
	// 			</div>
	// 			<div className="row pb-3">
	// 				<div className="col-sm-12">
	// 					<input type="password" name="password" className="form-control text-input-custom" placeholder="Password" required htmlFor="Password" />
	// 				</div>
	// 			</div>
	// 			<div className="row pb-4">
	// 				<div className="col-sm-12">
	// 					<button className="btn btn-lg btn-primary btn-block" type="submit" id="btnLogIn">Log In</button>
	// 				</div>
	// 			</div>
	// 			<div className="row">
	// 				<div className="col-sm-12">
	// 					<Link to="/register" className="float-sm-left"><small>Register</small></Link>
	// 					<Link to="/forgot-password" className="float-sm-right"><small>Forgot Password</small></Link>
	// 				</div>
	// 			</div>
	// 		</form>
	// 	</div>
	// </div>


	render() {
		return (
			<div className="form-login-wrapper w-100">
				<div className="row h-100">
					<div className="col-sm-12 align-vertical-custom">
						<div className="row">
							<div className="col-sm-12 d-flex justify-content-center">
								<SignatureLogo />
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 d-flex justify-content-center">
								<p className="watch-this">Wicked Things Coming</p>
							</div>
						</div>
					</div>
				</div>
			</div>
	  	);
	}
}

const mapStateToProps = (state) => {
    return {
		auth: state.auth,
		alerts: state.props
    }
};

export default connect(mapStateToProps)(AnonymousPartialPage);