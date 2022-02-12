const initialState = {
id: 0,
name: "",
story_texts: [],
}


//PARTICULAR TO CURRENT USER

export const userReducer = (state = initialState, action) => {
switch(action.type){
case 'SET_USER':
return action.payload 
case "USER_STORIES":
return {...state, userStories: action.payload }
case "CLEAR_USER":
return null
case "DELETE_USER":
  return   state.id 
 case "USER_ATTR":
 return action.payload 
default:
return state
}
}