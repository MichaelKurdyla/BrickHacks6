import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";

import "./styles/index.scss";

import Controller from "./routing/Controller";

import { getUser } from "./actions/user/auth";

function App() {
  useEffect(() => {
    store.dispatch(getUser());
  });

  return (
    <Provider store={store}>
      <Controller />
    </Provider>
  );
}

export default App;
