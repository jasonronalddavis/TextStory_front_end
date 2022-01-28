const initialState = {
id: 0,
name: ""
}


//PARTICULAR TO CURRENT USER

export const userReducer = (state = initialState, action) => {
switch(action.type){
case 'SET_USER':
return action.user
case "CLEAR_USER":
return null
case 'USER_ATTR':
return action.payload
default:
return state
}
}