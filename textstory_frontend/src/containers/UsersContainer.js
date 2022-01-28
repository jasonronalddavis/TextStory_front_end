import React from 'react';
import {connect} from 'react-redux'
import  {fetchUsers}  from '../action/User/fetchUsers';
import ListUsers from "../components/User/users";
import { NavLink } from 'react-router-dom'
import '../components/Home.css'


//DEALS WITH USERS ON GLOBAL SCOPE



class UsersContainer extends React.Component  {


    render() {
      return (
        <div className="UsersContainer">  
         <h1 id="usersHeader">Users</h1>
        <NavLink exact activeClassName="active" to="/" className="homeLink">Home</NavLink>
 
  <ListUsers/>
        </div>
      );
    }
  }
  





    
  
  export default connect(null, {fetchUsers})(UsersContainer);

