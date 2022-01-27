import React from 'react'
import {connect} from 'react-redux'
import { useEffect, useState } from "react";
import {updateCat} from '../../../action/StoryTexts/CreateStoryTexts';
import  {fetchCategories}  from '../../../action/Category/fetchCategories';


const CatCheckBox = ({formData, updateCat,fetchCategories,categories}) => {

 // const formState = (event,value) => {  const formAttributes = {...formData, [categories]: event.target.value }}
 console.log(categories)

   const [newImage, setNewImage] = useState('');

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
 categories.map((category,idx) => {
//debugger;

  <label>
  <input
  className="CheckBox"
  id={category.id}
  type="checkbox"
  value={category.name}
  onChange={handleCat}
  checked={isChecked}
  name={category.name}
  //onClick={handleChecked}
  />
  </label>
  }
  )
)
   

 





}






const mapStateToProps = (state) => {
//debugger;
  return {
    formData: state.storytext,
    categories: state.categories,
    
  }   
}






export default connect(mapStateToProps,  {updateCat,fetchCategories} )(CatCheckBox)
