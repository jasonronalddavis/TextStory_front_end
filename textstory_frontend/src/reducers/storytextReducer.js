export const storytextReducer = (state = null, action) => {
switch(action.type){
case 'FETCH_STORYTEXTS':
return action.payload
default:
return state
}
}