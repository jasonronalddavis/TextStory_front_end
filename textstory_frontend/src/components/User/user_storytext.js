
import React from 'react';
import  {connect}  from 'react-redux';
import {getCurrentUser} from '../../action/User/user';
import {userAttr} from "../../action/User/user";
import {userStories} from "../../action/User/user";
import {userStoryTexts} from "../../action/User/userStoryTexts";
import {setUserStory} from "../../action/User/userStoryTexts";
import './User.css'

//MOUNTED ON USER_STORYTEXTS COMPONENT
//PRESENTATIONAL COMPONENT
//IN CONSTRUCTION
const  ViewUserStory = ({userStory,props}) => { 

          const storyImages = []
          props.map( i => storyImages.push(i.attributes.images))

            return (         
                <div className="User_Story"> 
                <h1 className="user_story_header">Your Story</h1>
                <div className="user_story"> 
                {userStory && userStory.map(s => <h2 className="story_name"> Story Name: <br></br>{s.attributes.name}</h2>
                    )}
              {userStory && userStory.map(s => <p className="story_description"> Story Description: <br></br>{s.attributes.description}</p>
                    )}
              {storyImages[0].map( i => <ul className="ListUserStoryImages"> <il key={i.id} ><img className="ViewUserStoryImages" src={i.url}/> </il></ul>)}
             
              {userStory && userStory.map(s => <div> <p className="story_text_content"> <h4 className="UserStoryContHeader">Story Text Content: </h4><br></br>{s.attributes.text_content}</p>
              </div>)}

              </div> 
                  </div> 
            )
          }   
      


         const mapDispatchToProps = (dispatch) => {
           return {
            userStories: () => dispatch(userStories()), 
            } 
              }


          //MAPTOPROPS  
           const mapStateToProps = (state) => {
        return {
             user: state.user,
             userStory: state.storytext.user_story
             
            }     
           }
              



//EXPORT
           export default connect(mapStateToProps,{getCurrentUser,mapDispatchToProps,userAttr, userStories})(ViewUserStory);
