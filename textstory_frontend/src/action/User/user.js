export const setUser = user => {
//debugger;
return {
 type: "SET_USER",
payload: user.attributes
    }
}


export const userAttr = user => {

  return {
    type: "USER_ATTR",
   payload: user
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
 return fetch("http://localhost:3001/api/v1/login",{
   credentials: "include",
  method: "post",
 headers : { 
      'Content-Type': 'application/json'
        },
    body: JSON.stringify(credentials)
 })

 .then(r => r.json())
 .then( resp => {

if(resp.error){
  alert(resp.error)
} else {
 // debugger;
dispatch(setUser(resp.data))
}
 })
 .catch(console.log())
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
           dispatch(userAttr(response.data))
        }
      })
      .catch(console.log())
  }
}




export const logout = () => {
  return  dispatch => {
    dispatch(clearUser())
    return fetch("http://localhost:3001/api/v1/logout", {
    credentials: "include",
    method: "DELETE"
    })
    }
  }
  