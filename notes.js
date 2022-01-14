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

   
   

