

import  {onSnapshot} from "firebase/firestore";
import React from 'react';
import  {connect}  from 'react-redux';
import { useEffect, useState } from "react";
import 'firebase/storage';
import app from "./firebase";
//MOUNTED ON CEATESTORY FOR EXTENDED FUNCTIONALITY

// passing down isSet, setImage, and handleImageChnage as props
//isSet, setImage, handleImageChnage, formData, getCurrentUser,categories

const FireBaseUpload = ({image_file}) => {

  // below using a dataset attribute on the parent div so I know what idx needs to be updatedFormInfo
  // for the checked attribute grabbing the right value out of isSet for the index
  // whether it should be checked or not


console.log(app)
//RENDERED CHECKBOX



  return (() => {
  



    })




}


//MAP TO PROPS

const mapStateToProps = (state) => {
  return {
   images: "null"
  }
}

export default connect(mapStateToProps)(FireBaseUpload)




