import React from 'react';
import { NavLink } from 'react-router-dom'
import '../containers/users.css';
import {getCurrentUser} from '../action/User/user';
import  {connect}  from 'react-redux';


//HOME PRESENTAION MODULE LINKED TO ROOT INDEX '/' 

//CONTAINS LINKS TO USERS PAGE AND STORYTEXTS PAGE ROOT TO '/storytexts'

const Home = ({user}) => {
return (
<div>
<h1 className="homePageHeader"> Home Page</h1><br></br>
 {user ? <NavLink exact activeClassName="active" to="/users"  className="usersLink">Users</NavLink> : null }
{user ? <NavLink exact activeClassName="active" to="/storyTexts"  className="StoryTextLink"><br></br><br></br>Stories</NavLink> : null }
{user ? <NavLink exact activeClassName="active" to="/about"  className="AboutLink"><br></br><br></br>About</NavLink> : null }
{user ? <NavLink exact activeClassName="active" to="/userProfile"  className="UserProfileLink"><br></br><br></br>Your Profile</NavLink> : null }

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
