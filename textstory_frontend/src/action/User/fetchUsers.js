export const fetchUsers = () =>  {

return (dispatch) => {

fetch("http://localhost:3001/api/v1/users", {
  headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
      }
})
.then(response => response.json())
.then(users => dispatch({type: 'FETCH_USERS', payload: users}))   
}


}

