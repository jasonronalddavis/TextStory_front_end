
import React from 'react';
import  {connect}  from 'react-redux';
import {getCurrentUser} from '../../action/User/user';
import {userAttr} from "../../action/User/user"


//MOUNTED ON STORYTEXTCONTAINER
//LOGGED IN USERS STORIES

class UserStoryTexts extends React.Component  { 



//FETCHING CURRENT USER 

    componentDidMount(){
        this.props.getCurrentUser()  
      this.props.userAttr()
        }


//https://webcode.tools/generators/css/perspective

//RENDER USER ATTRIBUTES

//        {this.props.user.story_texts.map(storytext => <ul><li key={storytext.attributes.id}>  {storytext.attributes.name} </li> </ul>)} </li> </ul>)}

        render(){
     
            return ( 
                <div className="User_Stories"> 
                <h1 id="user_stories_header">Your Stories</h1>
                <ul> {this.props.user}</ul>
                  </div> 
            )
          }
          }
          



          //MAPTOPROPS  
           const mapStateToProps = ({user},state) => {
         
             return {
              state,
            }
           }
              



//EXPORT
           export default connect(mapStateToProps,{getCurrentUser, userAttr})(UserStoryTexts);
