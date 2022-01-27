
const initialstate = [



]



export const categoriesReducer = (state=[], action) => {
switch(action.type){
case "FETCH_CATEGORIES": 
//initialstate.push(action.categories) 
return action.payload
default:
return state
}
}