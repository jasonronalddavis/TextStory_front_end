const initialState = {
 name: "",
  password: ""
}

export const signupReducer = (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_SIGNUP_FORM":
      return action.userData
    case "RESET_SIGNUP_FORM":
      return initialState
    default:
      return state
  }
}