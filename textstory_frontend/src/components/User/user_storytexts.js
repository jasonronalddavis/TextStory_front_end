
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

setImage = (image) => {

const reader = new FileReader();

//reader.readAsDataURL(image)
}
//https://webcode.tools/generators/css/perspective
//const imageArray = this.props.user_stories.map(s => s.relationships.images.data)
//console.log(imageArray.map(i => i.id,))
        render(){
       //  {this.props.storyRelationships.map(s =>  s.images.data.map( s => <img src={setImage(s)} alt="default " /> ))}
            return ( 
                <div className="User_Stories"> 
                <h1 id="user_stories_header">Your Stories</h1>
                <div className="user_stories"> 
                {this.props.storyRelationships.map(s => <img src={this.setImage(s.images.data)} alt="default" />)}
              <ul>  {this.props.stories.map(s =><li key={s.id}> {s.name}</li>)}</ul>
              </div> 
                  </div> 
            )
          }   
          }
          


         const mapDispatchToProps = (dispatch) => {
           return {
            userStories: () => dispatch(userStories()),
        
            }
            
              }


          //MAPTOPROPS  
           const mapStateToProps = (state) => {
//debugger;
//
//{...state.user, story_texts:  }

//--> STUCK HERE <-----
const user_stories = state.user.story_texts.map(s => s.id)
const userStories = state.storytexts.filter(element => user_stories.includes(element.id) );
const story_Relationships = userStories.map(s => s.relationships)
const imageArray = userStories.map(s => s.relationships.images.data.map(s => parseInt(s.id)))
const user_images = state.user.images.map((s,index)=> s.id)
imageArray.map(i => i.map(element => element ))
            
        return {
             user: state.user,
           stories: state.user.story_texts,
           user_stories: userStories,
           storyRelationships: story_Relationships
            }     
           }
              



//EXPORT
           export default connect(mapStateToProps,{getCurrentUser,mapDispatchToProps,userAttr, userStories})(UserStoryTexts);
