import React from 'react';
import { Link } from 'react-router-dom';

import SignatureLogo from '../components/molecules/SignatureLogo';
import Signature from '../components/molecules/Signature';

import '../styles/components/anonymous.scss';

class RegistrationSuccessfulPage extends React.Component {
    constructor(props) {
        super(props);
    }

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
						<div className="row pb-5">
							<div className="col-sm-12 d-flex justify-content-center">
								<form name="login-form" className="form-login p-5">
									<div className="row pb-3">
										<div className="col-sm-12">
											<p className="lead text-center">
												<small>Thank you for completing the registration process. Expect An email from us in your inbox with a link inside to confirm your that the email address you provided is valid.</small>
											</p>
											<p className="lead text-center">
												<small>Please click the on the link in the email to to complete the process.</small>
											</p>
										</div>
									</div>
									<div className="row pb-4">
										<div className="col-sm-12">
											<Link to="/" className="btn btn-lg btn-primary btn-block">Home Page</Link>
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

export default RegistrationSuccessfulPage;
