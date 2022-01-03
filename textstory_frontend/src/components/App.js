import '../App.css';
import React, { Component } from 'react';
import Form from "../components/Form/Formz";
import  { fetchUsers }  from '../action/User/fetchUsers'
import  {connect}  from 'react-redux';
import StoryTextContainer from '../containers/StoryTextContainer';
import UsersContainer from '../containers/UsersContainer';



class App extends Component  {




render() {
  
  return (

    <div className= "App">
   <Form/>
   <StoryTextContainer />
    <UsersContainer/>
    </div>
  )
}


}


const mapStateToProps = state => {
  return {
    users: state.users,
    loading: state.loading
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)