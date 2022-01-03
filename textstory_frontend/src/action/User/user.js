export const setUser = user => {
return {
 type: "SET_USER",
  user
    }
}


//asynchronpus action creators 

export const login = credentials => {
  console.log("credentials are",credentials)
return dispatch => {
 return fetch("http://localhost:3001/api/v1/users/login",{
  method: "post",
 headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
        },
    body: JSON.stringify()
    
 })
}
}
