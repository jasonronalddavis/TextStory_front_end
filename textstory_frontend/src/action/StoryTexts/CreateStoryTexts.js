


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




  //ASYNC

export const CreateStoryText = (storyTextData) =>  {
return dispatch => {
    const sendData = {
      category_ids: storyTextData.categoryIds,
      image_ids: storyTextData.imageIds,
      description: storyTextData.description,
      name: storyTextData.name,
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