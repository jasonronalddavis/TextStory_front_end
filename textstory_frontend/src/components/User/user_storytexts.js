
import React from 'react';
import  {connect}  from 'react-redux';
import {getCurrentUser} from '../../action/User/user';



//MOUNTED ON STORYTEXTCONTAINER
//LOGGED IN USERS STORIES

class UserStoryTexts extends React.Component  { 



//FETCHING CURRENT USER 

    componentDidMount(){
        this.props.getCurrentUser()  
        }


//https://webcode.tools/generators/css/perspective

//RENDER USER ATTRIBUTES
        render(){
            return ( 
                <div className="User_Stories"> 
                <h1 id="user_stories_header">Your Stories</h1>
                <ul> {this.props.user.storytexts}</ul>
                  </div> 
            )
          }
          }
          

          //MAPTOPROPS  
           const mapStateToProps = ({user}) => {
             return {
              user
            }
           }
              



//EXPORT
           export default connect(mapStateToProps,{getCurrentUser})(UserStoryTexts);
