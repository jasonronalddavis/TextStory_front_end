
import React from 'react';
import  {connect}  from 'react-redux';
import {getCurrentUser} from '../../action/User/user';
import {userAttr} from "../../action/User/user";
import {userStories} from "../../action/User/user";
import {userStoryTexts} from "../../action/User/userStoryTexts";
import ViewUserStory from "./user_storytext";
import {setValues} from '../../action/StoryTexts/EditStoryText';
import {setVal} from '../../action/StoryTexts/EditStoryText';
import {setUserStory} from "../../action/User/userStoryTexts";
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
      user_story: "",
      view: false
    };
          this.getStoryText = this.getStoryText.bind(this)
  }

//PERSISTING COMPLEX DATA TO LOCAL STATE TO NOT FREEZE UP REDUX STORE
//FETCHING CURRENT USER AND USER STORY ATTRIBUTES FROM IMPORTED ACTIONS.
//MAPPING USER_STORY_TEXT FETCH FUNCTION TO LOCAL STATE


componentDidMount(){
  //ARRAYS ARE FOR CAPTURING ALL USER STORIES AND IMAGE INSTANCES 
  //INSTANCES WILL BE IMPLEMENTED FOR EXTENDED FUNCTIONALITY
  //IMPLEMENTED TO MAKE NESTED DATA MORE ACCESSIBLE
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
      window.addEventListener('click', (e) => this.turnOffCreate(e));
      //EVENT LISTENER FOR BOOLEAN STATE
      window.addEventListener('click', (e) => this.turnOffSelf(e));

    }
      }) 
        }

//HANDLERS


turnOffSelf(e){
  e.target.name == "view" ? this.setState({view: true }) : null

}
        turnOffCreate(e){
          e.target.class == "homeLink" || e.target.name == "create" || e.target.name == "viewStory" || e.target.name == "edit"? this.setState({view: false }) : null
        }
       
      getStoryText(e){
//FETCHING STORY OBJECT BY E.TARGET.ID TO DISPLAY IN VIEW COMPONENT
        const eVal = e.target
        const name = eVal.getAttribute("name")
        const collectImage = []
        const collectStory = []
        const collectS = []
        const parseVal = parseInt(e.target.id)
        const user_story = this.state.setPromise.filter( s => s.attributes.id === parseVal)
        const values = this.props.values
        console.log(this.props.values)
        //VALUES === PROP VALUES WHICH WILL BE USED TO SET IN REDUCER
        this.props.setValues(values,name)
        this.props.setVal(values,name)
         this.setState({user_story: user_story})
    
        this.props.setUserStory(user_story)
     }


        render(){
          //MAPPING OVER USER STORIES AND SELECTING IMAGE ATTRIBUTE TO DISPLAY IN RENDERDOM
          // EACH KEY CORRESPONDS TO A PARTICULAR STORY
            return (    
     
                <div className="User_Stories"> 
                {this.state.view == true ? <ViewUserStory props={this.state.user_story} /> : null}
                <h1 className="user_stories_header">Your Stories</h1>
                <div className="user_stories"> 
                <ul className="Image_List" onClick={this.getStoryText} > {this.state.setPromise && this.state.setPromise.map(s =>  s.attributes.images.map( i =>  <img className="storyImages" key={i.id} name="view" id={s.id} src={i.url}/>))}</ul>
              </div> 
                  </div> 
            )
          }   
          }
          


         const mapDispatchToProps = (dispatch) => {
           return {
            userStories: () => dispatch(userStories()), 
              sV: () => dispatch(setVal()), 
             setV: () => dispatch(setValues())
            } 
              }


          //MAPTOPROPS  
           const mapStateToProps = (state) => {
        return {
             user: state.user,
             edit: state.storytext.edit,
            create: state.storytext.create,
            view: state.storytext.view,
            delete: state.storytext.delete,
            values: state.storytext
            }     
           }
              



//EXPORT
           export default connect(mapStateToProps,{getCurrentUser,mapDispatchToProps,setValues, setVal, userAttr,setUserStory, userStories})(UserStoryTexts);
