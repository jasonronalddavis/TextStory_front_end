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
import EditStory from '../components/FormPresentation/Storytext/editStory';


//IMPORTING FORM AND LIST OF STORY TEXTS
// NAVLINK MOUNTED FROM ROUTER TO RETURN HOME
//CONTAINS EDIT CREATE AND DELETE BUTTONS WHICH WILL EVENTUALLY ROUTE TO CRUD MODULES

//ATTEMPTING TO MAP BOOLEAN VALUES TO CRUD COMPONENTS. IF CLICKED, RENDER COMPONENT
class StoryTextContainer extends Component {

  constructor() {
    super();
    this.state = {
      edit: false,
      create: true,
      delete: false,
      view: false
    };
    debugger;
  }



//<NavLink exact activeClassName="active" to='../components/FormPresentation/Storytext/createStory' className="createLink">
//<img className="Create" src={require('../public/CREATE.png')} alt='view' />
//</NavLink>       

    render() {
    
      return (
  <div className="StoryTextContainer">  

<h1 class="ScriptHeader"> Stories</h1> 
  
        <NavLink exact activeClassName="active" to="/" className="homeLink">Home</NavLink>       

        <img className="user_story_cover"  alt="default" src={require('../public/user_story_list.png') }/>

        <img className="story_texts_cover"  alt="default" src={require('../public/storytexts_list.png') }/>


    <NavLink exact activeClassName="active" to="/Storytexts/"  className="editLink">
      <img className="Edit" src={require('../public/EDIT.png')} alt='edit' />
        </NavLink> 

<Link to="/storytexts/delete"> 
    <img className="Delete" src={require('../public/DELETE.png')} alt='delete' />
</Link> 

<NavLink exact activeClassName="active" to="/Storytexts" className="createLink">
<img className="Create" src={require('../public/CREATE.png')} alt='create' />
</NavLink> 
        <UserStoryTexts/>
        <ListStoryTexts/>
        <CreateStory/>
        </div>
      );
    }
  }
  




  export default connect(null, {fetchStoryTexts})(StoryTextContainer)