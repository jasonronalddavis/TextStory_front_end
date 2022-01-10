
import React from 'react';
import  {connect}  from 'react-redux';
import  {fetchUsers}  from '../../action/User/fetchUsers';










      const ListUsers = ({users}) => {

    return(
<div>
 {console.log(users)}
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

