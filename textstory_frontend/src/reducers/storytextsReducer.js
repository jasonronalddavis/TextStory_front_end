
export const storytextsReducer = (state = [], action) => {
switch(action.type){
case "FETCH_STORY_TEXTS":
return action.payload
default:
return state
}
}