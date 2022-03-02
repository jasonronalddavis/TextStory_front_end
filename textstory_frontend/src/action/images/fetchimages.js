//REMOVING SOON LOCAL STATE TO HOLD BACKEND STORY_TEXT_IMAGES 




export const setImages = images => {
const url = images.data.map(d => d.attributes.url)
return {
 type: "FETCH_IMAGES",
  payload: url
    }
}


export const setImage = images => {
  //debugger;
const image = []
images.data.map(d =>  image.push(d))
return{
type: "SET_IMAGE",
payload: image
}
}
//ASYNC


export const fetchImages = () =>  {
  return async dispatch => {
   return fetch("http://localhost:3001/api/v1/images",{
credentials: "include",
method: "GET",
body:JSON.stringify()
  })
  .then(r => r.json())
  .then(response => {
     dispatch(setImages(response))
     dispatch(setImage(response))
    })
  } 
}

