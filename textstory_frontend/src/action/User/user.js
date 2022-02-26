

export const userAttr = user => {
  return {
    type: "USER_ATTR",
   payload: user.attributes 
       }
}

export const setUser = user => {
  //debugger;
  return {
   type: "SET_USER",
  payload: user.attributes
      }
  }
  


export const userStories = stories => {

  return {
    type: "USER_STORIES",
   payload: stories
  
  }
}



export const clearUser = () => {
  return {
    type: "CLEAR_USER"
  }
}


export const deleteUser = userId => {
return {
type: "DELETE_USER",
userId
}
}

export const setUserImages = (images) => {

return {
  type: "SET_USER_IMAGES",
  payload: images
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




//--> STUCK HERE. USER KEEPS SIGNING OUT ON REFRESH <-----
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
        if (response.error){
          alert(response.error)
        } else {
        // debugger;

          const stories = response.data.relationships.story_texts.data

          dispatch(setUser(response.data)) 
           dispatch(userAttr(response.data))  
           dispatch(userStories(stories))

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
  



export const destroyUser = (userId) => {
 return  dispatch => {
    return fetch("http://localhost:3001/api/v1/users/${userId}", {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deleteUser(userId))
         // history.push(`/users`)
          // go somewhere else --> user show?
        }
      })
      .catch(console.log)
  }

}
