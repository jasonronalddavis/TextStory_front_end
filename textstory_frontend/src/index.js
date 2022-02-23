import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './components/App';
import { BrowserRouter as Router} from "react-router-dom";
import store from "./store"; 
import './BckGrnd.css'
//ACQUIRING STOR FROM SEPARATE MODULE

ReactDOM.render(
  <Provider store={store}>
  <Router>  
    <div>
    
  {<img className="BckGrnd" style={{ alignSelf: 'center' }}  alt="default" src={require('./public/BckGrnd.png') }
/>
//BACKGROUND IMAGE
}
    <App/>
    </div>
  </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
