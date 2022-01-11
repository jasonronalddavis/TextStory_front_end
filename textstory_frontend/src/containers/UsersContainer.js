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
        </div>
      );
    }
  }
  

// const mapDispatchToProps = dispatch => ({
//     fetchUsers: text => dispatch(fetchUsers)  
//   })



    
  
  export default connect(null, {fetchUsers})(UsersContainer);

