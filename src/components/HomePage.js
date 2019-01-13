import React from 'react';
import { connect } from 'react-redux';
import AuthenticatedPartialPage from './partials/home-page/Authenticated';
import AnonymousPartialPage from './partials/home-page/Anonymous';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.auth && this.props.auth.jwt
                ? <AuthenticatedPartialPage />
                : <AnonymousPartialPage />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps)(HomePage);
