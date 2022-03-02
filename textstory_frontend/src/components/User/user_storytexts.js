
import React from 'react';
import  {connect}  from 'react-redux';
import {getCurrentUser} from '../../action/User/user';
import {userAttr} from "../../action/User/user";
import {userStories} from "../../action/User/user";
import {userStoryTexts} from "../../action/User/userStoryTexts";
import './User.css'

//MOUNTED ON STORYTEXTCONTAINER
//LOGGED IN USERS STORIES

class UserStoryTexts extends React.Component  { 

  constructor(props) {
    super(props);  
//LOCAL STATE TO HOLD BACKEND STORY_TEXT_IMAGES 
    this.state = {
      user_stories: "",
      setPromise: "",
      setImages: "",
    };
          this.getStoryText = this.getStoryText.bind(this)
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
         
      this.setState({setPromise: value})
     value.map(v =>  story_images.push(...v.attributes.images))
      //PUSHING USER STORYTEXT STATE TO AN EMPTY ARRAY CALLED STORY_IMAGES
      user_stories.push(this.state.setPromise)
      this.setState({setImages: story_images })
      //PUSHING STORYTEXT IMAGE STATE TO AN EMPTY ARRAY CALLED STORY_IMAGES
    }
      }) 
        }



getStoryText(e){
const collectImage = []
const collectStory = []
const collectS = []
const parseVal = parseInt(e.target.id)
const matchImage = this.state.setImages.filter( i => i.id === parseVal)
const filter = matchImage.filter( i => i)
this.state.setPromise.map(s => collectStory.push(s.attributes))
collectStory.map( s => collectS.push(s.images.filter( i => i.id === 6)))
debugger;

}
//this.state.setPromise.map(s => s.attributes.images.map(i => i.id))


setImage = (image) => {
const reader = new FileReader();
//reader.readAsDataURL(image)
}
//https://webcode.tools/generators/css/perspective


        render(){
          //MAPPING OVER IMAGE ARRAY
            return (         
                <div className="User_Stories"> 
                <h1 className="user_stories_header">Your Stories</h1>
                <div className="user_stories"> 
      <ul className="Image_List" onClick={this.getStoryText} > {this.state.setPromise && this.state.setPromise.map(s =>  s.attributes.images.map( i =>  <img id={s.id}   src={i.url}/>))}</ul>
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
        return {
             user: state.user,
            }     
           }
              



//EXPORT
           export default connect(mapStateToProps,{getCurrentUser,mapDispatchToProps,userAttr, userStories})(UserStoryTexts);
