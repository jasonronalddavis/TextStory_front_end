
import React from 'react';
import  {connect}  from 'react-redux';
import  {fetchUsers}  from '../../action/User/fetchUsers';
import {useSelector} from 'react-redux';
//MOUNTED ON USERSCONTAINER





      const ListUsers = (props) => {
//map over user instances and display name 
const users= useSelector((state) => state.users.data);
console.log(users)


const componentDidMount = () => {
    // console.log(this.props)
    this.fetchUsers();
  }


    return(
<div>
list
 {console.log(props)}
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


export default connect(mapStateToProps,mapDispatchToProps)(ListUsers);

