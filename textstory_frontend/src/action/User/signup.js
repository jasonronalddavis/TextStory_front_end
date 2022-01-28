
import {setUser} from "./user.js"



export const updateSignupForm = userData => {
  return {
    type: "UPDATE_SIGNUP_FORM",
 userData
  }
}



export const resetSignupForm = () => {
  return {
    type: "RESET_SIGNUP_FORM"
  }
}



//ASYNC


export const signup = (credentials) => {
  return dispatch => {

  const userInfo = {
      user: credentials
    }


    return fetch("http://localhost:3001/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setUser(response.data))
          dispatch(resetSignupForm())
        }
      })
      .catch(console.log())
  }
}