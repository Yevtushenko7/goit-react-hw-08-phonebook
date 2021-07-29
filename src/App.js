import React from "react";
import { connect } from "react-redux";
import { Component, Suspense, lazy } from "react";
import { Switch, Redirect } from 'react-router-dom';
import AppBar from './components/AppBar';
import { authOperations } from './redux/auth';
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

class App extends Component {

   componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    
    return (
    
      <>
        <AppBar />
        <Suspense fallback = {<p>Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute path="/register" restricted redirectTo="/contacts" component={RegisterView} />
            <PublicRoute path="/login" restricted redirectTo="/contacts" component={LoginView} />
            <PrivateRoute path="/contacts" redirectTo="/login" component={ContactsView} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </>
    );
  };
};


const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);