import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import AuthenticatedContainer from '../components/General/Authenticated/AuthenticatedContainer';
import Home from '../components/General/Authenticated/Home';
import Scan from '../components/Auth/Scan';
/**
 * @private true
 * @route   /home/*
 * @param   user object
 */
const AuthenticatedRoutes = props => {
  const { user } = props;
  console.log(user);
  return (
    <Switch>
      <Route
        exact
        path="/home/"
        render={() => (
          <AuthenticatedContainer
            userName={user.name}
            points={user.points}
            component={<Home />}
          />
        )}
      />
      <Route
        exact
        path="/home/scan"
        render={() => (
          <AuthenticatedContainer
            userName={user.name}
            points={user.points}
            component={<Scan />}
          />
        )}
      />
    </Switch>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(AuthenticatedRoutes);
