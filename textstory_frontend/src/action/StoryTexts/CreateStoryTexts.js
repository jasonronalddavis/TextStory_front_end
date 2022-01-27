



export const setStoryText = (name, value) => {
 
  const formData = { name, value }
  // storyFormData = { name: formdata.name}
return {
 type: "SET_STORY_TEXT",
 formData
    }
}



export const updateForm =  (formData, input) => {

//  debugger;
 const name = input.name

 const value = input.value
        const updatedFormInfo = {
          ...formData,
          [input.name]: input.value
        }
      //  debugger;
  return {
    type: "UPDATE_STORY_TEXT_FORM",
    updatedFormInfo
  }
  
}



export const updateCat = (formData, input) => {

const cat =  input
const catFormInfo = {
  ...formData,
categories: [input]
}
//debugger;
return {
  type: "UPDATE_CAT",
  catFormInfo
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
  
  
  



  
  
  
  export const uploadImage = (image_file,newImg,formData) => { 
    const updatedImg = {...formData,
    image_file: newImg
      }
    return {
      type: "UPLOAD_IMAGE",
      updatedImg
      }
  }//
//
  //ASYNC

export const CreateStoryText = (storyTextData, newImage) =>  {

//debugger;

return async dispatch => {
    const sendData = {
      categories: storyTextData.categories,
      image_file: newImage,
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