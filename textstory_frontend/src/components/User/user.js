import React from 'react';
import  {connect}  from 'react-redux';
import {getCurrentUser} from '../../action/User/user';
import './User.css'



//MOUNTED ON APP
//LOGGED IN USER

class User extends React.Component  { 



//FETCHING CURRENT USER 

    componentDidMount(){
        this.props.getCurrentUser()  
        }




//RENDER USER ATTRIBUTES
        render(){
            return ( 
                <div className="User"> 
                <h1> {this.props.user.name} </h1>
                  </div> 
            )
          }
          }
          

          //MAPTOPROPS  
           const mapStateToProps = ({user},state) => {
        // debugger;
             return {
              user
            }
           }
              



//EXPORT
           export default connect(mapStateToProps,{getCurrentUser})(User);
