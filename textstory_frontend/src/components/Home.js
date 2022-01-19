import React from 'react';
import {Switch,Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import users from './User/users';
import '../containers/users.css';
import {getCurrentUser} from '../action/User/user';
import  {connect}  from 'react-redux';



const Home = ({user}) => {
return (

<div>
Home Page<br></br>
 {user ? <NavLink exact activeClassName="active" to="/users"  className="usersLink">Users</NavLink> : null }
{user ? <NavLink exact activeClassName="active" to="/storyTextForm"  className="StoryTextFormLink"><br></br><br></br>Scripts</NavLink> : null }
</div>
);
};


 const mapStateToProps = ({user}) => {
   return {
    user
  }
 }







export default connect(mapStateToProps, {getCurrentUser})(Home);
