export const storytextReducer = (state = [], action) => {
switch(action.type){
case 'FETCH_STORYTEXTS':
return action.payload
default:
return state
}
}