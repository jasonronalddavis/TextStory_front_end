

  
  //asynchronpus action creators 
  
  

  
  
  
  //--> STUCK HERE. USER KEEPS SIGNING OUT ON REFRESH <-----
  export const userStoryTexts = () => {

      return fetch("http://localhost:3001/api/v1/user_story_texts", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        'Accept': 'application/json'
        },    
      })
        .then(r => r.json())
        .then(response => {
          if (response.error){
            alert(response.error)
          } else {
//debugger;
            const stories = response.data

            return (stories)
          }
        })
        .catch(console.log())
    
  }
  
  
