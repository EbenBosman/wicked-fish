import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SignatureLogo from '../../molecules/SignatureLogo';
import Signature from '../../molecules/Signature';

import '../../../styles/components/authenticated.scss'

class AuthenticatedPartialPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
		return (
			<div className="form-login-wrapper w-100">
				<div className="row h-100">
					<div className="col-sm-12 align-vertical-custom">
						<div className="row pb-5">
							<div className="col-sm-12 d-flex justify-content-center">
								<SignatureLogo />
							</div>
						</div>
						<div className="row pb-5">
							<div className="col-sm-12 d-flex justify-content-center">
								<form name="login-form" className="form-login p-5">
									<div className="row pb-3">
										<div className="col-sm-12">
											<h1 className="text-center">Coming soon</h1>
											<p className="lead text-center">
												<small>Still under construction. Check back again soon.</small>
											</p>
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

export default withRouter(AuthenticatedPartialPage);