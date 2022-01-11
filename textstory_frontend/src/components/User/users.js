
import React from 'react';
import  {connect}  from 'react-redux';
import {useSelector} from 'react-redux';
//MOUNTED ON USERSCONTAINER





      const ListUsers = ({users}, props) => {
//map over user instances and display name 



console.log(users)


    return(
<div>
list
 {props.users && props.users.map(user => <ul> {user}</ul>)}
</div>
    );
  };


  const mapStateToProps = state => {
    return {users: state.users }
    }

const mapDipsatchToProps = dispatch => {
return {
  fetchUsers: users => dispatch({type: ' FETCH_USERS', users})
}

}



export default connect(mapStateToProps, mapDipsatchToProps)(ListUsers);

