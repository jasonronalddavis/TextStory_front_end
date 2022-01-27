import React from 'react'
import {connect} from 'react-redux'
import { useEffect, useState } from "react";
import {updateCat} from '../../../action/StoryTexts/CreateStoryTexts';
import  {fetchCategories}  from '../../../action/Category/fetchCategories';


 const CatCheckBox = ({formData, updateCat,fetchCategories,categories}) => {

 // const formState = (event,value) => {  const formAttributes = {...formData, [categories]: event.target.value }}
const cat = categories

  //const initialValues = {name: "", description: "", text_content: "", image_file: "", categories: []}; 
const [isChecked, setIsChecked] = useState(new Array([].length).fill(true)
);







  const handleCat = (e, idx) => {
     // debugger;
  const catName = e.target.value
  const checked = {isChecked: [e.target.value]}
  checked.isChecked.map(c => {c})
debugger;
  setIsChecked(checked); 
updateCat(formData,catName)
  }






const cMap = categories.map((c,index) => {
    return (
<div>
  <label   className="CheckBox">
  <input
  id={c.id}
  type="checkbox"
  value={c.name}
  onChange={handleCat}
  checked={!isChecked}
  name={c.name}
  /> {c.name}
  </label> 
  </div>
  )
})


return cMap



}






const mapStateToProps = (state) => {
  console.log(state.categories)
  return {
    formData: state.storytext,
    categories: state.categories,
    
  }   
}






export default connect(mapStateToProps,  {updateCat,fetchCategories} )(CatCheckBox)
