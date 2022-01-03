import React, { Component } from 'react';
import {connect} from 'react-redux'
import  {fetchUsers}  from '../action/User/fetchUsers';

class UsersContainer extends Component {


componentDidMount(){
this.props.fetchUsers()

}




    render() {
      return (
        <div>
        barnes
          
        </div>
      );
    }
  }
  
  
  
  export default connect(null,{fetchUsers})(UsersContainer);