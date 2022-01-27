import React from 'react';
import {connect} from 'react-redux'
import { useEffect, useState } from "react";
import {updateCat} from '../../../action/StoryTexts/CreateStoryTexts';
import ListCategories from '../../../components/Category/categories';
import {CreateStoryText} from '../../../action/StoryTexts/CreateStoryTexts';
import  {fetchCategories}  from '../../../action/Category/fetchCategories.js';
import CategoriesContainer from '../../../containers/categoriesContainer';
import StoryTextForm from './storyTextForm'







class  CatCheckBox extends React.Component {

 // const formState = (event,value) => {  const formAttributes = {...formData, [categories]: event.target.value }}
 


 componentDidMount(){
    this.props.fetchCategories() 
    console.log(this.props.categories) 
    }



  handleCat = (e, idx) => {
//   const cat = e.target.checked
//   const checked = {isChecked: [e.target.value]}
// //debugger;
//   setIsChecked(checked ); 
// updateCat(formData,cat)
  }




render () {
<CategoriesContainer/>
return (
    
    <div className="CheckBx">
 {this.props.categories.map((category,idx) => {
//debugger;
  <label>
  <input
  id={category.id}
  type="checkbox"
  value={category.name}
  onChange={this.handleCat}
  //checked={isChecked}
  name={category.name}
  //onClick={handleChecked}
  />
  </label>
  }
  )
}
  </div>
)  
}
 







}






const mapStateToProps = (state) => {
   // debugger;
  return {
    formData: state.storytext,
    categories: state.categories
  }  
 
}

const mapDispatchToProps = dispatch => {
return {
categories: () => dispatch(fetchCategories())
}
}




export default connect(mapStateToProps,  {fetchCategories,CategoriesContainer,mapDispatchToProps} )(CatCheckBox)
