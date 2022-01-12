
import React from 'react';
import  {connect}  from 'react-redux';
import {useSelector} from 'react-redux';
//MOUNTED ON USERSCONTAINER
import  {fetchUsers}  from '../../action/User/fetchUsers';




class ListUsers  extends React.Component  {
  // const ListUsers = ({users, props}) => {
  //map over user instances and display name 
  
  componentDidMount(){
      // console.log(this.props)
      this.props.fetchUsers();
    }
  
    render() {
      return(
  <div>
   {this.props.users.map(user => <ul>  {user.name} </ul>)}
  </div>
      );
    };
  }
  
    const mapStateToProps = state => {
      return {users: state.users }
      
      }
  
    const mapDispatchToProps = dispatch => {
          return {
     fetchUsers: () => dispatch(fetchUsers())
          }
      }
  
  export default connect(mapStateToProps,mapDispatchToProps)(ListUsers);