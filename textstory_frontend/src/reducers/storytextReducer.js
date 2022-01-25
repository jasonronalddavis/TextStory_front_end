

const initialState = {
  name: "",
  description: "",
 category_ids: [],
 user_id: "",
 user_ids: [],
 comment_ids: [],
file: [],
 text_content: "",
 image_file: "",
}





export const storytextReducer = (state = initialState, action) => {
switch(action.type){
case "SET_STORY_TEXT":
  return action.formData && console.log(action.formData)
  case "UPDATE_STORY_TEXT_FORM":
  return action.formData
case "RESET_STORY_TEXT_FORM":
return initialState
case "UPLOAD_IMAGE":
 return  action.payload
default:
return state
}
}