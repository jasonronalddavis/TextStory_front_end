
fetch("http://localhost:3001/api/v1/story_texts", {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
        }
  })
  .then((response) => response.json()
  .then(function(object){
   // new StoryText(object.attributes); 
    console.log(object.data);
    console.log(object.length);
  })
  
  )