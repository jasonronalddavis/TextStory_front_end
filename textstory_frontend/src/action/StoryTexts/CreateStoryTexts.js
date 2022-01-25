import React from 'react'
import { useEffect, useState } from "react";



export const setStoryText = (name,state, value) => {
 
  const formData = { name, value }
  // storyFormData = { name: formdata.name}
return {
 type: "SET_STORY_TEXT",
 formData
    }
}



export const updateForm =  (input,state, formData,value) => {


  return {
    type: "UPDATE_STORY_TEXT_FORM",
    formData: input
  }
}


export const resetStoryText = () => {
  return {
    type: "RESET_NEW_TRIP_FORM",
  }
}





export const setImage = (image_file) => {

  return {
   type: "UPLOAD_IMAGE",
    payload: image_file
      }
   
  }
  
  
  
  
  
  
  export const uploadImage = (image_file) => { 
  //debugger;
    return  dispatch => {
   // const imageR = reader.readAsDataURL(file);
  dispatch(setImage(image_file))
   
  }
  
  }//
//
  //ASYNC

export const CreateStoryText = (storyTextData) =>  {
debugger;
return async dispatch => {
    const sendData = {
      categories: storyTextData.categoryIds,
      image_id: storyTextData.image_file,
      description: storyTextData.description,
      name: storyTextData.name,
      text_content: storyTextData.text_content,      
      user_id: storyTextData.userId,
      user_ids: storyTextData.userIds
    }
  

    return fetch("http://localhost:3001/api/v1/story_texts/create", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(setStoryText(resp.data))
          //dispatch(resetStoryText())
          // go somewhere else --> trip show?
          // add the new trip to the store
        }
      })
      .catch(console.log)

  }
}