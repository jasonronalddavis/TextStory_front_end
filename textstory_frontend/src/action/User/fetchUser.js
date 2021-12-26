
export const fetchUser = () => {
    return (dispatch) => {
      dispatch({ type: 'New_User'})
      fetch("http://localhost:3000/api/v1/users").then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'ADD_USER', user: responseJSON })
      })
    }
  }


