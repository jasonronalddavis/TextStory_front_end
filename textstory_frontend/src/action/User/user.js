export const setUser = user => {
return {
 type: "SET_USER",
  user
    }
}


export const clearUser = () => {
  return {
    type: "CLEAR_USER"
  }
}




//asynchronpus action creators 



export const login = credentials => {
  console.log("credentials are",credentials)
return dispatch => {
 return fetch("http://localhost:3001/api/v1/users/login",{
   credentials: "include",
  method: "post",
 headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
        },
    body: JSON.stringify(credentials)
 })

 .then(r => r.json())
 .then( user => {

if(user.error){
  alert(user.error)
} else {
dispatch(setUser(user))
}
 })
 .catch(console.log())
}
}




export const logout = event => {
return dispatch => {
  dispatch(clearUser())
 return fetch("http://localhost:3001/api/v1/logout",{
   credentials: "include",
  method: "DELETE",
 })
}
}










export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      'Accept': 'application/json'
      },
        
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setUser(response.data))
    
        }
      })
      .catch(console.log())
  }
}

