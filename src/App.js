import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from 'redux-thunk'
import reducers from "./reducers";

import firebaseConfig from "./api/firebaseConfig";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    firebaseConfig;
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <LoginForm />
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center"
  }
};

export default App;
