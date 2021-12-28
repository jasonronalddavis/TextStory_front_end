import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import './index.css';
import App from './App';
import userReducer from './action/User/UserReducer';
import { BrowserRouter as Router, Route } from "react-router-dom";

const base_url = "http://localhost:3000/api/v1/users"

const store = createStore(userReducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
  <Router>  
    <div>
      <Route exact path="/" component={App} />  
    </div>
  </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
