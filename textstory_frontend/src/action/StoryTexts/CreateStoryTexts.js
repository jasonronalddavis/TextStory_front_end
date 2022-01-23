import React from 'react'
import { useEffect, useState } from "react";



export const setStoryText = storytext => {
    
return {
 type: "SET_STORY_TEXT",
  storytext
    }
}



export const updateForm =  (name, value) => {
   const formData = { name, value }
  //debugger;
  return {
    type: "UPDATE_STORY_TEXT_FORM",
    formData
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
  
    return  dispatch => {
   // const imageR = reader.readAsDataURL(file);
  dispatch(setImage(image_file))
   
  }
  
  }//
//
  //ASYNC

export const CreateStoryText = (storyTextData, image_file) =>  {

return dispatch => {
  
    const sendData = {
      category_ids: storyTextData.categoryIds,
      image_id: storyTextData.imageId,
      description: storyTextData.description,
      name: storyTextData.name,
      text_content:  storyTextData.text_content,      
      user_id: storyTextData.userId,
      user_ids: storyTextData.userIds
    }
  

    return fetch("http://localhost:3001/api/v1/story_texts", {
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
          dispatch(resetStoryText())
          // go somewhere else --> trip show?
          // add the new trip to the store
        }
      })
      .catch(console.log)

  }
}