import React, { Component } from 'react';
import ListStoryTexts from '../components/StoryText/storytexts';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import  {fetchStoryTexts}  from '../action/StoryTexts/FetchStoryTexts';
import StoryTextForm from '../components/FormPresentation/Storytext/storyTextForm';
import './storytexts.css'
import '../components/Home.css'


//IMPORTING FORM AND LIST OF STORY TEXTS
// NAVLINK MOUNTED FROM ROUTER TO RETURN HOME
class StoryTextContainer extends Component {

    render() {
      return (
        <div className="StoryTextContainer">  
         <h1 id="ScriptHeader">Stories</h1>
        <NavLink exact activeClassName="active" to="/" className="homeLink">Home</NavLink>
        <ListStoryTexts/>
        <StoryTextForm/>
        </div>
      );
    }
  }
  




  export default connect(null, {fetchStoryTexts})(StoryTextContainer)