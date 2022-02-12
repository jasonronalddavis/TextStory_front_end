import  {connect}  from 'react-redux';
import React, { Component } from 'react';
import  {fetchStoryTexts}  from '../../action/StoryTexts/FetchStoryTexts';
import {fetchImages} from '../../action/images/fetchimages'
//MOUNTED ON STORYTEXT CONTAINER


class ListStoryTexts extends Component {


//FETCHING ALL STORYTEXTS
componentDidMount(){
      // console.log(this.props)
      this.props.fetchStoryTexts();
      this.props.fetchImages();
    }


//RENDERS A LIST OF STORIES lOGS
  render() {
//debugger;
    return(
      <div className="StoryTextList">
      <ul>
        {this.props.images.map(i => <ul key={i.id}> <img className="imageLilst" src={i}/>  </ul>)}
      </ul>
      </div>
    );
  }
};



//MAP TO PROPS


const mapStateToProps = state => {
 // debugger;
      return {
        storytexts: state.storytexts,
      images: state.images.url
      }
      }
  

    const mapDispatchToProps = dispatch => {
          return {
     fetchStoryTexts: () => dispatch(fetchStoryTexts()),
     fetchImages: () => dispatch(fetchImages())
          }
      }







  export default connect(mapStateToProps,mapDispatchToProps)(ListStoryTexts);