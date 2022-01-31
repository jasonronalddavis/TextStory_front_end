const initialState = {
id: 0,
name: "",
storytexts: ""
}


//PARTICULAR TO CURRENT USER

export const userReducer = (state = initialState, action) => {
switch(action.type){
case 'SET_USER':
return action.payload 

case "CLEAR_USER":
return null
// case "USER_ATTR":
// return action.user
default:
return state
}
}