export const setImages = images => {
 
  const image = []
images.data.map(d =>  image.push(d))
console.log(image)
    return {
     type: "FETCH_USER_IMAGES",
      payload: image
        }
    }
    
    
    
    //ASYNC
    
    
    export const fetchUserImages = () =>  {
      return async dispatch => {
        const r = await fetch("http://localhost:3001/api/v1/users")
        const images = await r.json()
        return dispatch(setImages(images))
    }
    }
    