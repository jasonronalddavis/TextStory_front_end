
import React from 'react';
import  {connect}  from 'react-redux';
import  {fetchUsers}  from '../../action/User/fetchUsers';
import  "../../containers/users.css";
import Home from "../../components/Home.js"
import { NavLink } from 'react-router-dom'

//MOUNTED ON USERSCONTAINER


class ListUsers  extends React.Component  {
  // const ListUsers = ({users, props}) => {
  //map over user instances and display name 
  


  //FETCHING ALL USER INSANCES  
  componentDidMount(){
      this.props.fetchUsers();
    }
  
//<NavLink exact activeClassName="active" to="/"  className="homeLink">Home</NavLink>
//RENDER USERS

    render() {
      return(   
  <div className="listUsers">
<NavLink exact activeClassName="active" to="/"  className="homeLink">Home</NavLink>
  {this.props.users.map(user => <ul key={user.id}> {user.attributes.name} </ul>)}
  </div>
      );
    };
  }
  



//  MAPTOPROPS
    const mapStateToProps = state => {
      return {users: state.users}
      }
  
    const mapDispatchToProps = dispatch => {
          return {
     fetchUsers: () => dispatch(fetchUsers())
          }
      }

  export default connect(mapStateToProps,mapDispatchToProps)(ListUsers);