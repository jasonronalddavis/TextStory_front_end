import React from 'react';
import {connect} from 'react-redux'
import  {fetchUsers}  from '../action/User/fetchUsers';
import ListUsers from "../components/User/users";




class UsersContainer extends React.Component  {


componentDidMount(){
this.props.fetchUsers()

}


    render() {
      return (
        <div>   
  UsersContainer
  <ListUsers/>
  {this.props.users && this.props.users.map(user => <ul> {user}</ul>)}
        </div>
      );
    }
  }
  





    
  
  export default connect(null, {fetchUsers})(UsersContainer);

