
const initial_state = [



]




export const categoriesReducer = (state =[], action) => {
switch(action.type){
case "FETCH_CATEGORIES": 
console.log(action.categories) 
return action.categories
default:
return state
}
}