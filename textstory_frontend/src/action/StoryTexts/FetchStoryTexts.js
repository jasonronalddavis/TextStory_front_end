export const setStoryTexts = storytexts => {
 // debugger;
return {
 type: "FETCH_STORY_TEXTS",
  payload: storytexts.data
    }
}

export const viewStory = (story) => {
  return{
  type: "SET_USER_STORY",
  story
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


