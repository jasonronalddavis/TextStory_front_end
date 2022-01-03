


const initialState = {
name: "",
password: ""
}





export const LoginFormReducer = (state = initialState, action) => {
switch(action.type){
case 'UPDATE_LOGIN_FORM':
  return action.formData
default:
 return state

 
}

}