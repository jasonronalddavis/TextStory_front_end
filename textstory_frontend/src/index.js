import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './components/App';
import { BrowserRouter as Router, Route} from "react-router-dom";
import store from "./store"; 
import BckGrnd from "./public/BckGrnd.png";
import './BckGrnd.css'




ReactDOM.render(
  <Provider store={store}>
  <Router>  
    <div>
  {<img className="BckGrnd" style={{ alignSelf: 'center' }} src={require('./public/BckGrnd.png') }
/>}
    <App/>
    </div>
  </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
