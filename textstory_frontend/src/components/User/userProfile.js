import React from 'react';
import  {connect}  from 'react-redux';
import {getCurrentUser} from '../../action/User/user';
import Delete from "./deleteUser.js";
import { NavLink } from 'react-router-dom';

import './User.css'



//MOUNTED ON APP
//LOGGED IN USER

class UserProfile extends React.Component  { 



//FETCHING CURRENT USER 

    componentDidMount(){
        this.props.getCurrentUser() 
       
        }

//RENDER USER ATTRIBUTES
        render(){
            return ( 
                <div className="User"> 
                <h1> {this.props.user.name} </h1>
            <div>
                    <NavLink exact activeClassName="active" to="/" className="aboutHomeLink">Home</NavLink>       
                    {this.props.user ?  <Delete/> : <h1 id="lo"> Please Sign up </h1>}
            
                </div> 


                  </div> 
            )
          }
          }
          






          //MAPTOPROPS  
           const mapStateToProps = ({user},state) => {
//debugger;
             return {
              user,
              storytexts: user.story_texts
            }
           }
              



//EXPORT
           export default connect(mapStateToProps,{getCurrentUser})(UserProfile);
