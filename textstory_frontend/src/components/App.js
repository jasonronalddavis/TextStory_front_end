import '../App.css';
import React from 'react';
import LoginForm from "../components/FormPresentation/Login";
import  {connect}  from 'react-redux';
import CategoriesContainer from '../containers/categoriesContainer';
import {getCurrentUser} from '../action/User/user';
import Logout from "./FormPresentation/logout";
import Router from "./Router";
import User from "../components/User/user";
import Signup from "../components/FormPresentation/Signup";

//MAIN APP PAGE

class App extends React.Component  {



//EVENTHANDLERS

componentDidMount(){
this.props.getCurrentUser()
}


//RENDERED COMPONENTS WITH LOGIC DEPENDING ON IF USER IS LOGGED IN OR NOT
render(){
  return (
    <div className="App">
      <Router/>
     <CategoriesContainer/> 
  {this.props.user ? <Logout/> : <LoginForm/>}
 {this.props.user ? <User/> : null}
 {this.props.user ? null : <Signup/>}
    </div>
  );
}
}

//MAPTOPROPS
 const mapStateToProps = ({user}) => {
   return {
    user
  }
 }
 




export default connect(mapStateToProps, {getCurrentUser})(App);
