

const initialState = {
url: []
}








export const imageReducer = (state = initialState, action) => {
switch(action.type){
case "FETCH_IMAGES":
return {...state, url: action.payload }
default:
return state
}
}