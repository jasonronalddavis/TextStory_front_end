//REMOVING SOON LOCAL STATE TO HOLD BACKEND STORY_TEXT_IMAGES 



export const setImages = images => {
    const url = images.data.map(d => d.attributes.url)
    return {
     type: "FETCH_IMAGES",
      payload: url
        }
    }
    
    
    
    //ASYNC
    
    
    export const fetchUserImages = () =>  {
      return async dispatch => {
        const r = await fetch("http://localhost:3001/api/v1/images")
        const images = await r.json()
        return dispatch(setImages(images))
    }
    }
    