import '../App.css';
import React from 'react';
import Form from "../components/Form/Formz";
//import  { fetchUsers }  from '../action/User/fetchUsers'
import  {connect}  from 'react-redux';
import StoryTextContainer from '../containers/StoryTextContainer';
import UsersContainer from '../containers/UsersContainer';
import {getCurrentUser} from '../action/User/user';
import Logout from "./Form/logout";
import Router from "./Router";
import Stylesheet from "./Stylesheet";
import User from "../components/User/user";
import Signup from "../components/Form/Signup";




class App extends React.Component  {


componentDidMount(){
this.props.getCurrentUser()

}



render(){
  return (
    <div className="App">
      <Stylesheet/>
      <UsersContainer/>
    
  {this.props.user ? <Logout/> : <Form/> }
 {this.props.user ? <User/> : null}
 {this.props.user ? null : <Signup/>}
    </div>
 
 
  );
}
}


 const mapStateToProps = ({user}) => {
   return {
    user
  }
 }
 




export default connect(mapStateToProps, {getCurrentUser})(App);
