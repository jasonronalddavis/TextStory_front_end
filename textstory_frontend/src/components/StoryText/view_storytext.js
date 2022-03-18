
import React from 'react';
import  {connect}  from 'react-redux';
import {getCurrentUser} from '../../action/User/user';

import '../../containers/storytexts.css'
import "./storytext.css"
//MOUNTED ON USER_STORYTEXTS COMPONENT
//PRESENTATIONAL COMPONENT
//IN CONSTRUCTION
        const  ViewStory = (props) => { 

const storytext = []

if (props.storytext != "undefined"){
props.storytext.map( s => storytext.push(s.attributes))
//console.log(storytext.map( s => s.id))
}


            return (   
                <div className="viewStory" > 
                <h1 className="viewStoryHeader">View Story:</h1>
                <div className="scrollStory">
                 { storytext && storytext.map(s => s ? <div><h3 className="storyNameHeader"> Story Name:</h3><h4 className="viewStoryName" key={s.id}> {s.name} </h4></div> : null )}  
                 {  storytext && storytext.map(s => s ? <div className="viewDesContent"> <h3 className="storyDesHeader"> Description: </h3><p className="viewStoryDescription" key={s.id}> {s.description} </p></div> : null)}   
                 <ul className="ViewStoryImageList"> {storytext && storytext.map(s => s ? s.images.map (i => <img key={i.id} className="viewStoryImages" src={i.url}/>) : null)} </ul>
                 {  storytext && storytext.map(s => s ? <div className="viewStoryTextContent"> <h3 className="viewTextContHeader"> Text Content: </h3><p className="TextContent" key={s.id}> {s.text_content} </p></div> : null) }   

                 </div> 
                </div> 
            )
          }   
      


          //MAPTOPROPS  //NOT USING REDUX CURRENTLY FOR THIS COMPONENT
          //MIGHT WANT TO UTILIZE LATER
           const mapStateToProps = (state) => {         
        return {
             user: state.user,
             userStory: state.storytext.user_story
             
            }     
           }
              



//EXPORT
           export default connect(mapStateToProps,{getCurrentUser})(ViewStory);
