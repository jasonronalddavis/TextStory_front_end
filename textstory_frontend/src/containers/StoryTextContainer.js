import React, { Component } from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import  {fetchStoryTexts}  from '../action/StoryTexts/FetchStoryTexts';
import { Link } from 'react-router-dom'
import CreateStory from '../components/FormPresentation/Storytext/createStory';
import ListStoryTexts from '../components/StoryText/storytexts';
import UserStoryTexts from '../components/User/user_storytexts';
import './storytexts.css'
import '../components/Home.css'


//IMPORTING FORM AND LIST OF STORY TEXTS
// NAVLINK MOUNTED FROM ROUTER TO RETURN HOME
//CONTAINS EDIT CREATE AND DELETE BUTTONS WHICH WILL EVENTUALLY ROUTE TO CRUD MODULES
class StoryTextContainer extends Component {

    render() {
    
      return (
  <div className="StoryTextContainer">  

<h1 class="ScriptHeader"> Stories</h1> 
  
        <NavLink exact activeClassName="active" to="/" className="homeLink">Home</NavLink>       

        <img className="user_story_cover"  alt="default" src={require('../public/user_story_list.png') }/>

        <img className="story_texts_cover"  alt="default" src={require('../public/storytexts_list.png') }/>

<Link to="/storytexts/edit">
    <img className="Edit" src={require('../public/EDIT.png')} alt='edit' />
</Link>

<Link to="/storytexts/delete"> 
    <img className="Delete" src={require('../public/DELETE.png')} alt='delete' />
</Link> 

<Link to="/storytexts/view"> 
    <img className="Create" src={require('../public/CREATE.png')} alt='view' />
</Link> 
        <UserStoryTexts/>
        <ListStoryTexts/>
        <CreateStory/>
        </div>
      );
    }
  }
  




  export default connect(null, {fetchStoryTexts})(StoryTextContainer)