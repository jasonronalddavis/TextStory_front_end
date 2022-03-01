
import React from 'react';
import  {connect}  from 'react-redux';
import {getCurrentUser} from '../../action/User/user';
import {userAttr} from "../../action/User/user";
import {userStories} from "../../action/User/user";
import {fetchStoryText} from "../../action/User/viewStoryText";
import './User.css'

//MOUNTED ON STORYTEXTCONTAINER
//LOGGED IN USERS STORIES

class UserStoryText extends React.Component  { 

  constructor(props) {
    super(props);
    
//LOCAL STATE TO HOLD BACKEND STORY_TEXT_IMAGES 
    this.state = {
      user_stories: "",
      setPromise: "",
      setImages: ""
    };
  }

//FETCHING CURRENT USER AND USER STORY ATTRIBUTES FROM IMPORTED ACTIONS.
//MAPPING USER_STORY_TEXT FETCH FUNCTION TO LOCAL STATE
//SETTING STORY_TEXT IMAGE ATTRIBUTE TO LOCAL STATE

componentDidMount(){
  const user_stories = []
  const story_images = []
        this.props.getCurrentUser()
     this.setState({user_stories: userStoryTexts()})
     Promise.resolve(userStoryTexts()).then(value=>{
       if (value[0] !== undefined ) {
      this.setState({setPromise: value.attributes})
     value.map(v =>  story_images.push(...v.attributes.images))
      //PUSHING USER STORYTEXT STATE TO AN EMPTY ARRAY CALLED STORY_IMAGES
      user_stories.push(this.state.setPromise)
      this.setState({setImages: story_images })
      //PUSHING STORYTEXT IMAGE STATE TO AN EMPTY ARRAY CALLED STORY_IMAGES
      //this.setState({setImages: story_images})
    }
      }) 

        }




setImage = (image) => {
const reader = new FileReader();
//reader.readAsDataURL(image)
}
//https://webcode.tools/generators/css/perspective


        render(){

        const Istate = []
        Istate.push(this.state.setImages)
    //  console.log( this.state.setImages && this.state.setImages.map(i => i.id))
        // <ul> {this.state.setImages && this.state.setImages.map(i => <img src={i.url} />)}  </ul>
          //MAPPING OVER IMAGE ARRAY
            return ( 
            
                <div className="User_Story"> 
                <h1 className="user_story_header">Your Story</h1>
          
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

const users = state.storytexts.map( s => s.relationships.users)

const  consLog = users.map( u => u.data.map(i => i.id === "5"))

//const  consLog = users.map( u => u.map(i => i.id[0] === state.user.id))

//const userStories = state.storytexts.filter(element => user_stories.includes(element.id) );
//const story_Relationships = userStories.map(s => s.relationships)
//const imageArray = userStories.map(s => s.relationships.images.data.map(s => parseInt(s.id)))
//imageArray.map(i => i.map(element => element ))           
        return {
             user: state.user,
            }     
           }
              



//EXPORT
           export default connect(mapStateToProps,{getCurrentUser,mapDispatchToProps,userAttr, userStories})(UserStoryText);
