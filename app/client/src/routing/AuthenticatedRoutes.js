import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import AuthenticatedContainer from '../components/General/Authenticated/AuthenticatedContainer';
/**
 * @private true
 * @route   /home/*
 * @param   user object
 */
const AuthenticatedRoutes = props => {
  const { user } = props;
  return (
    <Switch>
      <Route exact path="/home" component={AuthenticatedContainer} />
      <Route>
        <div>404</div>
      </Route>
    </Switch>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(AuthenticatedRoutes);
