import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import AuthenticatedContainer from '../components/General/Authenticated/AuthenticatedContainer';
import Home from '../components/General/Authenticated/Home';
import Scan from '../components/Auth/Scan';
import Logout from '../components/General/Authenticated/Logout';
import Returns from '../components/General/Authenticated/Returns';
import Purchases from '../components/General/Authenticated/Purchases';

/**
 * @private true
 * @route   /home/*
 * @param   user object
 */
const AuthenticatedRoutes = props => {
  const { user } = props;
  console.log(user)
  return (
    <Switch>
      <Route
        exact
        path="/home/"
        render={() => (
          <AuthenticatedContainer
            userName={user.name}
            points={user.points}
            component={<Home
              userID={user._id}

              />}
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
            component={<Scan
              userName={user.name}
              phone={user.phone}
              points={user.points}
              userID={user._id}
              />}
          />
        )}
      />
      <Route
        exact
        path="/home/returns"
        render={() => (
          <AuthenticatedContainer
            userName={user.name}
            points={user.points}
            component={<Returns
              userName={user.name}
              phone={user.phone}
              points={user.points}
              userID={user._id}
              />}
          />
        )}
      />
      <Route
        exact
        path="/home/purchases"
        render={() => (
          <AuthenticatedContainer
            userName={user.name}
            points={user.points}
            component={<Purchases
              userName={user.name}
              phone={user.phone}
              points={user.points}
              userID={user._id}
              purchases={user.purchases}
              />}
          />
        )}
      />
      <Route
        exact
        path="/home/logout"
        render={() => (
          <AuthenticatedContainer
            userName={user.name}
            points={user.points}
            component={<Logout />}
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
