
import React from 'react';
import  {connect}  from 'react-redux';
import  {fetchUsers}  from '../../action/User/fetchUsers';

//MOUNTED ON USERSCONTAINER

      const ListUsers = ({users}) => {
//map over user instances and display name 
    return(
<div>

 {users.map(user => <ul>  {user.name} </ul>)}
</div>
    );
  };


  const mapStateToProps = state => {
    return {users: state.users }
    
    }


  const mapDispatchToProps = dispatch => {
        return {
   users: dispatch(fetchUsers())
        }
    }


export default connect(mapStateToProps,mapDispatchToProps)(ListUsers);

