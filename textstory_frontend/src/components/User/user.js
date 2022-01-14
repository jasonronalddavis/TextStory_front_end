import React from 'react';
import  {connect}  from 'react-redux';
import {getCurrentUser} from '../../action/User/user';
import {userAttr} from '../../action/User/user';
import './User.css'


class User extends React.Component  { 

    componentDidMount(){
        this.props.getCurrentUser()  
        }


        render(){
            console.log(this.props.user.name)
            return ( 
                <div className="User"> 
                <h1> {this.props.user.name} </h1>
                  </div> 
            )
         
          }
          }
          
          
           const mapStateToProps = ({user}) => {
             return {
              user
            }
           }
              
  const mapdispatchToProps = dispatch => ({
    userAttr: user => dispatch({type: "USER_ATTR", user})
  })



           export default connect(mapStateToProps,{getCurrentUser, mapdispatchToProps})(User);
