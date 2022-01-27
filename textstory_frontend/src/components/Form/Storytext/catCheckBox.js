import React from 'react'
import {connect} from 'react-redux'
import { useEffect, useState } from "react";
import {updateCat} from '../../../action/StoryTexts/CreateStoryTexts';
import  {fetchCategories}  from '../../../action/Category/fetchCategories';


export const CatCheckBox = ({formData, updateCat,fetchCategories,categories}) => {

 // const formState = (event,value) => {  const formAttributes = {...formData, [categories]: event.target.value }}
const cat = categories

  //const initialValues = {name: "", description: "", text_content: "", image_file: "", categories: []}; 
const [isChecked, setIsChecked] = useState(new Array([].length).fill(false)
);







  const handleCat = (e, idx) => {
  const cat = e.target.checked
  const checked = {isChecked: [e.target.value]}
//debugger;
  setIsChecked(checked ); 
updateCat(formData,cat)
  }




return (

categories.map(c => {
<div>
  <label   className="CheckBox">
  <input
  type="checkbox"
  value={c.name}
  onChange={handleCat}
  checked={isChecked}
  name={c.name}
  //onClick={handleChecked}
  />
  </label> 
  </div>
})
)





}






const mapStateToProps = (state) => {
  console.log(state.categories)
  return {
    formData: state.storytext,
    categories: state.categories,
    
  }   
}






export default connect(mapStateToProps,  {updateCat,fetchCategories} )(CatCheckBox)
