

import React from 'react'
import {connect} from 'react-redux'
import { useEffect, useState } from "react";
import {updateCat} from '../../../action/StoryTexts/CreateStoryTexts';
import  {fetchCategories}  from '../../../action/Category/fetchCategories';
import Select from 'react-select'
import axios from 'axios'


//MOUNTED ON CEATESTORY FOR EXTENDED FUNCTIONALITY

// passing down isChecked, setIsChecked, and handleCheckboxChange as props
const CatCheckBox = ({isChecked, setIsChecked, handleCheckboxChange, formData, updateCat,fetchCategories,categories}) => {

  // below using a dataset attribute on the parent div so I know what idx needs to be updatedFormInfo
  // for the checked attribute grabbing the right value out of isChecked for the index
  // whether it should be checked or not
const [selectedCat, setCat] = useState([]);

console.log(selectedCat)

//RENDERED CHECKBOX



  return categories.map((c) => {
    selectedCat.push(c)
    console.log(selectedCat)




    })




}


//MAP TO PROPS

const mapStateToProps = (state) => {
  return {
    formData: state.storytext,
    categories: state.categories
  }
}

export default connect(mapStateToProps,  {updateCat,fetchCategories} )(CatCheckBox)