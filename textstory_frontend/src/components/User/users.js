
import React from 'react';
import  {connect}  from 'react-redux';
//MOUNTED ON USERSCONTAINER
import  {fetchUsers}  from '../../action/User/fetchUsers';
import  "../../containers/users.css";




class ListUsers  extends React.Component  {
  // const ListUsers = ({users, props}) => {
  //map over user instances and display name 
  
  componentDidMount(){
      // console.log(this.props)
      this.props.fetchUsers();
    }
  
    render() {
     
      return(   
  <div className="listUsers">
 
  {this.props.users.map(user => <ul key={user.id}> {user.attributes.name} </ul>)}
  </div>
      );
    };
  }
  
    const mapStateToProps = state => {
      return {users: state.users}
      
      }
  
    const mapDispatchToProps = dispatch => {
          return {
     fetchUsers: () => dispatch(fetchUsers())
          }
      }

  export default connect(mapStateToProps,mapDispatchToProps)(ListUsers);