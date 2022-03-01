export const setStoryText = storytext => {
 // debugger;
return {
 type: "FETCH_STORY_TEXTS",
  payload: storytext.data
    }
}



//ASYNC


export const fetchStoryText = () =>  {
  return async dispatch => {
    const r = await fetch("http://localhost:3001/api/v1/story_texts/")
    const storytext = await r.json()
    return dispatch(setStoryTexts(storytext))
}
}


//https://github1s.com/howardbdev/globetrotter-frontend/tree/master/src/components



// const users = storytext.data.map( d => d.relationships.users.data)
// users.map( u => u.id)