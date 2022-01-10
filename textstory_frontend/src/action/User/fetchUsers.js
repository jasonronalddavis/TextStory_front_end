export const fetchUsers = credentials =>  {
return () => {
fetch("http://localhost:3001/api/v1/users", {
credentials: "include",
headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
      },
      body: JSON.stringify(credentials)
})
.then(response => response.json())
.then(users => ({type: 'FETCH_USERS', payload: users}))   
}


}

