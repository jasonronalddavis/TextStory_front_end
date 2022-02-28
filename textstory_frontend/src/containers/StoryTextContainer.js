import React, { Component } from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import  {fetchStoryTexts}  from '../action/StoryTexts/FetchStoryTexts';
import { Link } from 'react-router-dom'
import CreateStory from '../components/FormPresentation/Storytext/createStory';
import ListStoryTexts from '../components/StoryText/storytexts';
import UserStoryTexts from '../components/User/user_storytexts';
import UserStoryCover from '../components/User/story_TextCover';
import './storytexts.css'
import '../components/Home.css'
import {getCurrentUser} from '../action/User/user';
import EditStory from '../components/FormPresentation/Storytext/editStory';
import TestContainer from './testContainer';

//IMPORTING FORM AND LIST OF STORY TEXTS
// NAVLINK MOUNTED FROM ROUTER TO RETURN HOME
//CONTAINS EDIT CREATE AND DELETE BUTTONS WHICH WILL EVENTUALLY ROUTE TO CRUD MODULES

//ATTEMPTING TO MAP BOOLEAN VALUES TO CRUD COMPONENTS. IF CLICKED, RENDER COMPONENT
class StoryTextContainer extends Component {

constructor(props){
super(props);
this.state = {
create: true,
edit: false,
delete: false,
view: false
};
}

  componentDidMount(){
    this.props.getCurrentUser()  
    console.log(this.state.edit)
 }



refresh = () => {
window.location.reload();
}


setValue = (e) => {
  
   const eVal = e.target
  const value = eVal.getAttribute("value")
const name = eVal.getAttribute("name")
console.log(eVal.getAttribute("value"))
this.setState({[name]: true});
console.log({...this.state})


}


//<NavLink exact activeClassName="active" to='../components/FormPresentation/Storytext/createStory' className="createLink">
//<img className="Create" src={require('../public/CREATE.png')} alt='view' />
//</NavLink>       
// {this.state.edit == true : <TestContainer/> }

    render() {

      return (
  <div className="StoryTextContainer">  

<h1 className="ScriptHeader">All Stories</h1> 
  
  <NavLink exact activeClassName="active" to="/" className="homeLink">Home</NavLink>       

   <UserStoryCover/>
       
    <img className="story_texts_cover"  alt="default" src={require('../public/storytexts_list.png') }/>

    <button className="refresh" onClick={this.refresh} variant="text">refresh</button>

    
      <img className="Edit" id="edit" name="edit" onClick={(event) =>  this.setValue(event)} value={this.state.edit}  src={require('../public/EDIT.png')} alt='edit' />
   

  <button> 
    <img className="Delete" src={require('../public/DELETE.png')} alt='delete' />
      </button> 

    <button className="createLink">
        <img className="Create" src={require('../public/CREATE.png')} alt='create' />
            </button> 
            

        <UserStoryTexts/>
        <ListStoryTexts/>
        <CreateStory/>
        </div>
      );
    }
  }
  

const mapStateToProps = (user) => {

  return {
user

  }
}


  export default connect(mapStateToProps, {fetchStoryTexts, getCurrentUser})(StoryTextContainer)