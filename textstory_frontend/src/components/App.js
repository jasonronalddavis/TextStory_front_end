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

class App extends React.Component  {


componentDidMount(){
this.props.getCurrentUser()

}



render() {
  
  return (

    <div className= "App">
   <Form/>
   <StoryTextContainer />
   <UsersContainer/>
   <Router/>
    {<Logout/>}
    </div>
  )
}


}


 const mapStateToProps = state => {
   return {
     users: state.users,
     loading: state.loading,
     user: state.user
  }
 }
 
 const mapDispatchToProps = dispatch => {
   return {
    // fetchUsers: () => dispatch(fetchUsers()),
     getCurrentUser: () => dispatch(getCurrentUser())
   }
 }




export default connect(null, {mapStateToProps,mapDispatchToProps,getCurrentUser})(App);
