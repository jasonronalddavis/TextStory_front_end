
export const setUsers = users => {
return {
 type: "FETCH_USERS",
  payload: users.data

    }
}



//ASYNC


export const fetchUsers = () =>  {
  return async dispatch => {
    const r = await fetch("http://localhost:3001/api/v1/users/")
    const users = await r.json()
    return dispatch(setUsers(users))
}
}


//https://github1s.com/howardbdev/globetrotter-frontend/tree/master/src/components
