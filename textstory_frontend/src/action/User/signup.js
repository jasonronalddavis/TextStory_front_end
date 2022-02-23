


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




export const setUser = user => {
 //debugger;
  return {
   type: "SET_USER",
  payload: user
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
          dispatch(setUser(response))
          dispatch(resetSignupForm())
        }
      })
      .catch(console.log())
  }
}