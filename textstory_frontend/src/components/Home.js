import React from 'react';
import {Switch,Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import users from './User/users';
import '../containers/users.css';
import {getCurrentUser} from '../action/User/user';
import  {connect}  from 'react-redux';


//HOME PRESENTAION MODULE LINKED TO ROOT INDEX '/' 

//CONTAINS LINKS TO USERS PAGE AND STORYTEXTS PAGE ROOT TO '/storytexts'

const Home = ({user}) => {
return (
<div>
Home Page<br></br>
 {user ? <NavLink exact activeClassName="active" to="/users"  className="usersLink">Users</NavLink> : null }
{user ? <NavLink exact activeClassName="active" to="/storyTexts"  className="StoryTextLink"><br></br><br></br>Stories</NavLink> : null }
</div>
);
};

//MAP TO PROPS
//WILL USE USER PROPS LATER FOR EXTENDED FUNCTIONALITY 

 const mapStateToProps = ({user}) => {
   return {
    user
  }
 }







export default connect(mapStateToProps, {getCurrentUser})(Home);
