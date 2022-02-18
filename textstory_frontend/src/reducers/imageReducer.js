

const initialState = {
url: [],
id: 0,
imageObj: []
}








export const imageReducer = (state = initialState, action) => {
switch(action.type){
case "FETCH_IMAGES":
return {...state, url: action.payload }
case "SET_IMAGE":
return {...state, imageObj: action.payload}      
default:
return state
}
}