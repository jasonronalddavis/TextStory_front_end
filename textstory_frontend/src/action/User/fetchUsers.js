
export const setUsers = users => {
return {
 type: "FETCH_USERS",
  payload: users

    }
}






export const fetchUsers = () =>  {
  return dispatch => {
return fetch("http://localhost:3001/api/v1/users")
.then(r => r.json())
.then( resp => dispatch(setUsers(resp)))
}
}


//https://github1s.com/howardbdev/globetrotter-frontend/tree/master/src/components
