import React, { Component } from 'react';
import StoryTextContainer from '../../containers/StoryTextContainer';

class StoryText extends Component {

  render() {
    const storytextz = this.props.name;


    return (
     
        <li>
        {this.props.name}      
        </li>
      
    );
  }
};

const software = new StoryText({id: 1 , name: "A message to My future son"});
const storytextz = StoryText.all
//{<h1> {software.props.name}</h1>}

export default StoryText;