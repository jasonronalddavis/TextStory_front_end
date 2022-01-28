

import React from 'react'
import {connect} from 'react-redux'
import { useEffect, useState } from "react";
import {updateCat} from '../../../action/StoryTexts/CreateStoryTexts';
import  {fetchCategories}  from '../../../action/Category/fetchCategories';



//MOUNTED ON STORYTEXTFORM

// passing down isChecked, setIsChecked, and handleCheckboxChange as props
const CatCheckBox = ({isChecked, setIsChecked, handleCheckboxChange, formData, updateCat,fetchCategories,categories}) => {

  // below using a dataset attribute on the parent div so I know what idx needs to be updatedFormInfo
  // for the checked attribute grabbing the right value out of isChecked for the index
  // whether it should be checked or not




//RENDERED CHECKBOX
  return categories.map((c,index) => {
      return (
  <div data-idx={index} key={c.id}>
    <label   className="CheckBox">
      <input
      id={c.id}
      type="checkbox"
      value={c.name}
      onChange={handleCheckboxChange}
      checked={isChecked[index]}
      name={c.name}
      /> {c.name}
    </label>
    </div>
    )
  })
}


//MAP TO PROPS

const mapStateToProps = (state) => {
  console.log(state.categories)
  return {
    formData: state.storytext,
    categories: state.categories
  }
}

export default connect(mapStateToProps,  {updateCat,fetchCategories} )(CatCheckBox)