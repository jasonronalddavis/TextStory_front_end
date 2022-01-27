import React, { Component } from 'react';
import ListStoryTexts from '../components/StoryText/storytexts';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import  {fetchStoryTexts}  from '../action/StoryTexts/FetchStoryTexts';
import StoryTextForm from '../components/Form/Storytext/storyTextForm';
import './storytexts.css'

class StoryTextContainer extends Component {

    render() {
      return (
        <div className="StoryTextContainer">  
         <h1 id="ScriptHeader">Scripts</h1>
        <NavLink exact activeClassName="active" to="/" className="homeLink">Home</NavLink>
        <ListStoryTexts/>
        <StoryTextForm/>
        </div>
      );
    }
  }
  




  export default connect(null, {fetchStoryTexts})(StoryTextContainer)