export const setCategories = categories => {
return {
 type: "FETCH_CATEGORIES",
 categories
    }
}




export const fetchCategories = () =>  {
  return async dispatch => {
    const c = await fetch("http://localhost:3001/api/v1/categories")
    const categories = await c.json()

    return dispatch(setCategories(categories))
}
}
 