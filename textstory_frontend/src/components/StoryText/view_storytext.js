
import React from 'react';
import  {connect}  from 'react-redux';
import {getCurrentUser} from '../../action/User/user';

import '../../containers/storytexts.css'
import "./storytext.css"
//MOUNTED ON USER_STORYTEXTS COMPONENT
//PRESENTATIONAL COMPONENT
//IN CONSTRUCTION
        const  ViewStory = (props) => { 




 console.log(props.storytext.map(s => s.attributes.name))

       // <ul className="listStoryImgaes"> {props.storytext.map(s => s.attributes.images.map (i => <img key={i.id} className="storyImages" src={i.url}/>))} </ul>
            return (   
                <div className="viewStory" > 
                <h1 className="viewStoryHeader">View Story:</h1>
                <div className="scrollStory">
                 {props.storytext.map(s => <div><h3 className="storyNameHeader"> Story Name:</h3><h4 className="viewStoryName" key={s.attributes.id}> {s.attributes.name} </h4></div>)}   
                 {props.storytext.map(s => <div className="viewDesContent"> <h3 className="storyDesHeader"> Description: </h3><p className="viewStoryDescription" key={s.attributes.id}> {s.attributes.description} </p></div>)}   
                 <ul className="ViewStoryImageList"> {props.storytext.map(s => s.attributes.images.map (i => <img key={i.id} className="viewStoryImages" src={i.url}/>))} </ul>
                 {props.storytext.map(s => <div className="viewStoryTextContent"> <h3 className="viewTextContHeader"> Text Content: </h3><p className="TextContent" key={s.attributes.id}> {s.attributes.text_content} </p></div>)}   

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
