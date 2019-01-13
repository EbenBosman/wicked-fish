import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import NavBar from '../components/controls/NavBar';
import RegisterPage from '../components/RegisterPage';
import RegistrationSuccessfulPage from '../components/RegistrationSuccessfulPage';
import ConfirmEmailPage from '../components/ConfirmEmailPage';
import ForgotPasswordPage from '../components/ForgotPasswordPage';
import ResetPasswordPage from '../components/ResetPasswordPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <NavBar />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/registeration-successful" component={RegistrationSuccessfulPage} />
                <Route path="/confirm-email/:email/:token" component={ConfirmEmailPage} />
                <Route path="/forgot-password" component={ForgotPasswordPage} />
                <Route path="/reset-password/:email/:token" component={ResetPasswordPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);


export default AppRouter;
