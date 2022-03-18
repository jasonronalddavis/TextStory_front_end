import  {connect}  from 'react-redux';
import React, { Component } from 'react';
import  {fetchStoryTexts}  from '../../action/StoryTexts/FetchStoryTexts';
import {setImage} from '../../action/images/fetchimages';
import {setValues} from '../../action/StoryTexts/EditStoryText';
import {viewStory} from '../../action/StoryTexts/FetchStoryTexts';
import {setVal} from '../../action/StoryTexts/EditStoryText';
import ViewStory from '../../components/StoryText/view_storytext';

//MOUNTED ON STORYTEXT CONTAINER


class ListStoryTexts extends Component {

constructor(props){
super(props)
this.state= {
stortytext: "",
viewStory: false


}


}


//FETCHING ALL STORYTEXTS
componentDidMount(){
      // console.log(this.props)
      this.props.fetchStoryTexts();
      window.addEventListener('click', (e) => this.turnOffCreate(e));

    }



 turnOffCreate(e){
   e.target.class == "homeLink" || e.target.name == "view" ? this.setState({viewStory: false }) : null
 }

    
      setView = (e) => {
        const name = e.target.name
        const parseVal = parseInt(e.target.id)
        const story = this.props.storytexts.filter( s => s.attributes.id === parseVal)
        const values = this.props.values
        this.props.setValues(values,name)
        this.props.setVal(values,name)
        this.setState({viewStory: true})
        this.setState({storytext: story})
      }


//RENDERS A LIST OF STORIES BY IMAGES

  render() {
    
    return(
      <div className="StoryTextList">
       {this.state.viewStory === true ? <ViewStory {...this.state}/>  : null} 
      {this.props.storytexts.map(s => s.attributes.images.map( i => <div key={s.attributes.id}> <img 
      onClick={(e) => this.setView(e)} id={s.attributes.id} name="viewStory" className="imageLilst" src={i.url}/> </div>))}
     
      </div>
    );
  }
};



//MAP TO PROPS


const mapStateToProps = state => {
      return {
      storytexts: state.storytexts,
      edit: state.storytext.edit,
      create: state.storytext.create,
      view: state.storytext.view,
      delete: state.storytext.delete,
      values: state.storytext,
      viewStory: state.storytext.viewStory  
      }
      }
  

    const mapDispatchToProps = dispatch => {
          return {
        fetchStoryTexts: () => dispatch(fetchStoryTexts()),
        setVal: () => dispatch(setVal()), 
        setValues: () => dispatch(setValues()),
 

          }
      }







  export default connect(mapStateToProps,{mapDispatchToProps,fetchStoryTexts,setVal,setValues} )(ListStoryTexts);