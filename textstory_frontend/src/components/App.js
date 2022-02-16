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
import Logo from "../components/logo";


//import StoryTextContainer from '../containers/StoryTextContainer';

//MAIN APP PAGE

class App extends React.Component  {

  constructor(props) {
    super(props);
    // initial state has count set at 0
    this.state = {
      button: 0
    };
  }

//EVENTHANDLERS

componentDidMount(){
this.props.getCurrentUser()
}
 

inCrease = () => {
  this.setState(previousState => {
    let value = previousState.button + 1;
    return {
      button: value
    }
  })
}

//RENDERED COMPONENTS WITH LOGIC DEPENDING ON IF USER IS LOGGED IN OR NOT
render(){

  return (
    <div className="App">
      <Router/>
     {this.props.user ? <User/> : null}
  {this.props.user ? <Logout/> : <LoginForm/>}
 {this.props.user ? null : <Signup/>}

 <CategoriesContainer/> 
 <Logo/>
    </div>
  );
}
}

//MAPTOPROPS
 const mapStateToProps = ({user}) => {
 // console.log(user)
  return {
    user,

  }
 }
 
const mapDispatchToProps = (dispatch,{button}) => {
return {
 increaseButton: () => dispatch() 
}
}



export default connect(mapStateToProps, {getCurrentUser})(App);
