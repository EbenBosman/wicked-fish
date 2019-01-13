import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logOutOfApi } from '../../actions/authentication';
import API from '../utilities/API';

export class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLogout = async e => {
        e.preventDefault();

        const props = this.props;

        await API().post(`/api/auth/logout`)
            .then(function(response) {
                if(response.status !== 200)
                    throw new Error('Could not log out with the server');
            })
            .catch((error) => {
                console.debug(error);
            })
            .then(() => {
                props.history.push('/');
                props.dispatch(logOutOfApi())
            });
    }

    getBrandImageUrl = () => document.location.origin + '/images/logo-brand.png';

    loggdInContent = (auth) => (
        <div className="container-fluid p-2">
            <span className="navbar-brand">
                <img src={this.getBrandImageUrl()} width="150" height="39" />
            </span>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse justify-content-between" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item pl-2">
                        <Link className="nav-link" to="/">Dashboard</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="user">
                            {auth.user_name}
                        </Link>
                    </li>
                    <form className="form-inline pl-4">
                        <button type="button" onClick={this.handleLogout} className="btn btn-lg btn-outline-warning">Log Out</button>
                    </form>
                </ul>
            </div>
        </div>
    );

	render() {
		return (
            <div>
            {
                this.props.auth && this.props.auth.jwt
                ? (
                    <div>
                        <nav id="main-navbar" className="navbar bg-dark navbar-dark navbar-expand-lg mb-5">
                            { this.loggdInContent(this.props.auth) }
                        </nav>
                    </div>)
                : ''
            }
            </div>
        );
	}
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps)(withRouter(NavBar));
