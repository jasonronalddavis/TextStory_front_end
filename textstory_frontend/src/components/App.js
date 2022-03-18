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
      button: 0,
      getUser: "",
      showContent: false
    };
  }

//EVENTHANDLERS

componentDidMount(){
this.props.getCurrentUser()
this.setState(prevState => ({getUser: [...prevState.getUser, ...this.props.user]}))
}
 


componentWillUpdate(){


}



//RENDERED COMPONENTS WITH LOGIC DEPENDING ON IF USER IS LOGGED IN OR NOT
render(){

  return (
    <div className="App">

     {this.props.user  ? <User/> : null}
    
     {this.props.user == null ? <LoginForm/> : null}
    {this.props.user == null ? <Signup/> : null}

 { !this.props.user  ?  null : <Logout/>}
 {this.props.user ? <Router/> : null }
 <CategoriesContainer/> 
 <Logo/>
    </div>
  );
}
}

//MAPTOPROPS
 const mapStateToProps = ({user}) => {
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
