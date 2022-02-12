

const initialState = {
  name: "",
  description: "",
 categories: "",
 user: "",
 users: [],
 comments: [],
 text_content: "",
 image_file: "",
}





export const storytextReducer = (state = initialState, action) => {
switch(action.type){
case "SET_STORY_TEXT":
  return action.formData && console.log(action.formData)
  case "UPDATE_CAT":
    return action.catFormInfo
  case "UPDATE_STORY_TEXT_FORM":
  return action.updatedFormInfo
case "RESET_STORY_TEXT_FORM":
return initialState
case "UPLOAD_IMAGE":
 return action.updatedImg
default:
return state
}
}