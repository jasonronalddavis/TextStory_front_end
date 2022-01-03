import React, { Component } from 'react';
import StoryTexts from '../components/StoryText/storytext';
import {connect} from 'react-redux'


class StoryTextContainer extends Component {

    render() {
      return (
        <div>
          <StoryTexts 
          storytexts={this.props.storytexts} 
          deleteStoryText={this.props.deleteStoryText} 
          />
        </div>
      );
    }
  }
  
  const mapStateToProps = state => ({ storytexts: state.storytexts })
  
  const mapDispatchToProps = dispatch => ({
    addStoryText: text => dispatch({type: 'ADD_STORYTEXT', text}),
    deleteStoryText: id => dispatch({type: 'DELETE_STORYTEXT', id})
  })
  

  export default connect(mapStateToProps, mapDispatchToProps)(StoryTextContainer)