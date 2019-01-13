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

class NotFoundPage extends React.Component {
    constructor(props) {
        super(props);
    }

	componentDidMount() {
		this.unloadScrollBars();
	};

	unloadScrollBars = () => {
		document.documentElement.style.overflow = 'hidden';
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
											<h1 className="text-center">Page Not Found</h1>
											<p className="lead text-center">
												<small>This is not the page you are looking for.</small>
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

export default NotFoundPage;