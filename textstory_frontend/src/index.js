import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './components/App';
import { BrowserRouter as Router, Route} from "react-router-dom";
import store from "./store"; 





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
