


export const setImage = image => {
    
return {
 type: "SET_IMAGE",
  image
    }
}



export const updateForm =  (name, value) => {
   const imageData = { name, value }
  //debugger;
  return {
    type: "UPDATE_IMAGE",
    imageData
  }
}


export const resetStoryText = () => {
  return {
    type: "RESET_NEW_TRIP_FORM",
  }
}




  //ASYNC

export const CreateStoryText = (fetchedImageData) =>  {
return dispatch => {
    const sendData = {
      description: fetchedImageData.description,
      name: fetchedImageData.name,
      url: fetchedImageData.userId
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
          dispatch(setImage(resp.data))
         // dispatch(resetStoryText())
          // go somewhere else --> trip show?
          // add the new trip to the store
        }
      })
      .catch(console.log)

  }
}