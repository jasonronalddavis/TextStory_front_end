
import React from 'react';
import  {connect}  from 'react-redux';
import  {fetchUsers}  from '../../action/User/fetchUsers';

//MOUNTED ON USERSCONTAINER





const ListUsers = ({users, props}) => {
//map over user instances and display name 

const componentDidMount = () => {
    // console.log(this.props)
    this.fetchUsers();
  }


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
   fetchUsers: () => dispatch(fetchUsers())
        }
    }


export default connect(null, mapStateToProps,mapDispatchToProps)(ListUsers);

