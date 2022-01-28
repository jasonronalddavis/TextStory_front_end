import  {connect}  from 'react-redux';
import React, { Component } from 'react';
import  {fetchStoryTexts}  from '../../action/StoryTexts/FetchStoryTexts';

//MOUNTED ON STORYTEXT CONTAINER


class ListStoryTexts extends Component {


//FETCHING ALL STORYTEXTS
componentDidMount(){
      // console.log(this.props)
      this.props.fetchStoryTexts();
    }


//RENDERS A LIST OF STORIES lOGS
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



//MAP TO PROPS


const mapStateToProps = state => {
      return {storytexts: state.storytexts}
      }
  

    const mapDispatchToProps = dispatch => {
          return {
     fetchStoryTexts: () => dispatch(fetchStoryTexts())
          }
      }







  export default connect(mapStateToProps,mapDispatchToProps)(ListStoryTexts);