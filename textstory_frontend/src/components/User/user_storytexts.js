
import React from 'react';
import  {connect}  from 'react-redux';
import {getCurrentUser} from '../../action/User/user';
import {userAttr} from "../../action/User/user";
import {userStories} from "../../action/User/user";
import './User.css'

//MOUNTED ON STORYTEXTCONTAINER
//LOGGED IN USERS STORIES

class UserStoryTexts extends React.Component  { 



//FETCHING CURRENT USER 
    componentDidMount(){
        this.props.getCurrentUser()  
      //  debugger;
        }


//https://webcode.tools/generators/css/perspective

        render(){

            return ( 
                <div className="User_Stories"> 
                <h1 id="user_stories_header">Your Stories</h1>
                <div className="user_stories"> 
              <ul>  {this.props.stories.map(s =><li key={s.id}> {s.name}</li>)}</ul>
              </div> 
                  </div> 
            )
          }   
          }
          


         const mapDispatchToProps = (dispatch) => {
           return {
            userStories: () => dispatch(userStories())
        
            }
            
              }


          //MAPTOPROPS  
           const mapStateToProps = (state) => {

             return {
             user: state.user,
           stories: state.user.story_texts
            }     
           }
              



//EXPORT
           export default connect(mapStateToProps,{getCurrentUser,mapDispatchToProps,userAttr, userStories})(UserStoryTexts);
