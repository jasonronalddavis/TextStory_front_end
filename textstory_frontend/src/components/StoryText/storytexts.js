import  {connect}  from 'react-redux';
import React, { Component } from 'react';
import  {fetchStoryTexts}  from '../../action/StoryTexts/FetchStoryTexts';
import {fetchImages} from '../../action/images/fetchimages';
import {setImage} from '../../action/images/fetchimages';
//MOUNTED ON STORYTEXT CONTAINER


class ListStoryTexts extends Component {


//FETCHING ALL STORYTEXTS
componentDidMount(){
      // console.log(this.props)
      this.props.fetchStoryTexts();
      this.props.fetchImages();
    }


//RENDERS A LIST OF STORIES lOGS IMAGES
//      {this.props.image.map(i => <li key={i.id}> <img className="imageLilst" src={i.url}/>  </li>)}

  render() {
    const image = this.props.image


//debugger;
    return(
      <div className="StoryTextList">

        {this.props.image.map((i) =>  <ul key={i.id}> <img className="imageLilst" src={i.attributes.url}/>  </ul>)}
     
      </div>
    );
  }
};



//MAP TO PROPS


const mapStateToProps = state => {
//debugger;
      return {
        storytexts: state.storytexts,
      image: state.images.imageObj
      }
      }
  

    const mapDispatchToProps = dispatch => {
          return {
     fetchStoryTexts: () => dispatch(fetchStoryTexts()),
     fetchImages: () => dispatch(fetchImages()),

          }
      }







  export default connect(mapStateToProps,mapDispatchToProps)(ListStoryTexts);