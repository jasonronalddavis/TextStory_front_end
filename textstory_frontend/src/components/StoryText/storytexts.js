
import React, { Component } from 'react';
import StoryText from '../StoryText/StoryText'

class StoryTexts extends Component {
  render() {
    return(
      <ul>
        {this.props.StoryText.map(storytext => {
          return <StoryText key={storytext.id} storytext={storytext} deleteStoryText={this.props.deleteStoryText} />
        })}
      </ul>
    );
  }
};

export default StoryTexts;