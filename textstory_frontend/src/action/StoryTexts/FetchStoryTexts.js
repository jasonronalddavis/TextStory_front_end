export const setStoryTexts = storytexts => {
return {
 type: "FETCH_STORY_TEXTS",
  payload: storytexts.data
    }
}



//ASYNC


export const fetchStoryTexts = () =>  {
  return async dispatch => {
    const r = await fetch("http://localhost:3001/api/v1/story_texts/")
    const storytexts = await r.json()
    return dispatch(setStoryTexts(storytexts))
}
}


//https://github1s.com/howardbdev/globetrotter-frontend/tree/master/src/components