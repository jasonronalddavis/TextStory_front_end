

const initialState = {
  name: "",
  description: "",
 category_ids: {},
 user_id: "",
 user_ids: {},
 comment_ids: {},
 image_ids: {}
}






export const storytextReducer = (state = initialState, action) => {
switch(action.type){
case "SET_STORY_TEXT":
return state.concat(action.storytext)
case "RESET_STORY_TEXT_FORM":
return initialState
case "UPDATE_STORY_TEXT_FORM":
const returnVal = {
        ...state,
        [action.formData.name]: action.formData.value
      }
       return returnVal
default:
return state
}
}