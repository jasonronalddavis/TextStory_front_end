fetch("http://localhost:3001/api/v1/users/login",{
  method: "post",
 headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
        }
 })
 .then(r => r.json())
 .then( function(object){
    // new StoryText(object.attributes);
     console.log(object);
   })




    const r = await fetch("http://localhost:3001/api/v1/story_texts/create")
    const storytexts = await r.json()
    console.log(storytexts)






export const setCategories = categories => {

return {
 type: "FETCH_CATEGORIES",
  payload: categories.data

    }
}




export const fetchCategories = () =>  {
  return async dispatch => {
    const c = await fetch("http://localhost:3001/api/v1/categories")
    const categories = await r.json()
    return dispatch(setCategories(categories))
}
}


     const r = await fetch("http://localhost:3001/api/v1/categories")
    const categories = await r.json()
    console.log(categories)
}
}