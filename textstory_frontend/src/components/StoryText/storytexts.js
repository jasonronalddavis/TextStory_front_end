import  {connect}  from 'react-redux';
import React, { Component } from 'react';
import  {fetchStoryTexts}  from '../../action/StoryTexts/FetchStoryTexts';




class ListStoryTexts extends Component {


componentDidMount(){
      // console.log(this.props)
      this.props.fetchStoryTexts();
    }




  render() {
    return(
      <div className="StoryTextList">
      <ul>
        {this.props.storytexts.map(storytext => <ul key={storytext.attributes.id}> {storytext.attributes.name} </ul>)}
      </ul>
      </div>
    );
  }
};


const mapStateToProps = state => {
      return {storytexts: state.storytexts}
      
      }
  
    const mapDispatchToProps = dispatch => {
          return {
     fetchStoryTexts: () => dispatch(fetchStoryTexts())
          }
      }







  export default connect(mapStateToProps,mapDispatchToProps)(ListStoryTexts);