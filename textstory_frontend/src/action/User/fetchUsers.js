
export const setUsers = users => {
return {
 type: "FETCH_USERS",
  payload: users

    }
}






export const fetchUsers = () =>  {
  return dispatch => {
return fetch("http://localhost:3001/api/v1/users", {
 method: "GET",
headers : { 
    'Content-Type': 'application/json'
      },
      body: JSON.stringify()
})
.then(r => r.json())
.then( users => dispatch(setUsers(users)))

}
}


//https://github1s.com/howardbdev/globetrotter-frontend/tree/master/src/components
