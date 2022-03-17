

const initialState = {
  name: "",
  description: "",
 categories: "",
 user: "",
 users: [],
 comments: [],
 text_content: "",
 image_file: "",
  create: false,
 edit: false,
 delete: false,
 view: false,
 viewStory: false,
 user_story: "",
 storytext: ""
}





export const storytextReducer = (state = initialState, action) => {
switch(action.type){
case "SET_STORY_TEXT":
  return action.formData 
  case "UPDATE_CAT":
    return action.catFormInfo
    case "UPDATE_STORY_TEXT_FORM":
    return action.updatedFormInfo
    case "RESET_STORY_TEXT_FORM":
    return initialState
    case "SET_BOOLEAN_VALUES":
    return {...state, edit: false, viewStory: false, view: false, delete: false, create: false}
    case "SET_BOOLEAN_VALUE":
    return   {...state, [action.booleanName]: true}
    case "SET_USER_STORY":
    return {...state, user_story: action.user_story}
   case "UPLOAD_IMAGE":
    return action.updatedImg
    default:
  return state
}
}