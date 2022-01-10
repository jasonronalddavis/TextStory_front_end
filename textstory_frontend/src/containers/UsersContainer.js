import React from 'react';
import {connect} from 'react-redux'
import  {fetchUsers}  from '../action/User/fetchUsers';
import ListUsers from '../components/User/users';

class UsersContainer extends React.Component  {


componentDidMount(){
this.props.fetchUsers()
}



    render() {
      return (
        <div>   
     {this.props.users.map( user => <ul><li key={user.id}>  {user.name} </li></ul>)}
        </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {users: state.users }
    
    }
    
  
  export default connect(mapStateToProps,{fetchUsers})(UsersContainer);