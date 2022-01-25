import React from 'react'
import {connect} from 'react-redux'
import   {updateStoryTextForm}  from '../../../action/StoryTexts/CreateStoryTexts';
import {CreateStoryText} from '../../../action/StoryTexts/CreateStoryTexts';
import ListCategories from '../../../components/Category/categories';
import  {fetchCategories}  from '../../../action/Category/fetchCategories';
import {updateForm } from '../../../action/StoryTexts/CreateStoryTexts';
import '../../../styles/FormImages.css';
import { useEffect, useState } from "react";
import {uploadImage} from '../../../action/StoryTexts/CreateStoryTexts';



const StoryTextForm = ({formData, updateForm,uploadImage,state, image_file, CreateStoryText, categories, props}) => {


   const [newImage, setNewImage] = useState('');


const CheckBox = ({ value, onChange}) => {
return(
categories.map(category =>
<label>
<input
id={category.id}
type="checkbox"
checked={value}
onChange={onChange}
/>
{category.name}
</label>
)
)
}




const DefaultImage = () => {
  return (
<img  src={require('../../../public/DefaultImage.png')} alt="" id="StDefimg" className="img" onChange={imageHandler}/>
  )
}



const imageHandler = (e, state) => {
 //debugger;
  const  image_file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(e.target.files[0])
  const updateImage = {
    ...formData,
    [image_file]: image_file
   } 
  e.persist(e.target.files[0])
  reader.onloadend = () => {
    setNewImage(reader.result)
    
  uploadImage(image_file)
  //e.persist(newImage)
//debugger;
   console.log(formData.image_file)
    //debugger;
  }
}




    const  handleChange = (event, formData) => {
    
    const value = event.target.value 
        const updatedFormInfo = {
          ...formData,
          [event.target.name]: event.target.value
        }

        //debugger;
        event.persist(value)
      updateForm(updatedFormInfo)
      
      }
  

    const handleSubmit = event => {
     
    event.preventDefault()
 
    CreateStoryText(formData)
   }
    
    
  
   console.log(newImage)
    return ( 
       
      <div className="createStoryText"> 
      
      <h3> Create Story</h3>
        <form onSubmit={handleSubmit}><br></br>
<DefaultImage/><br></br>
<img className="imagePreview" src={newImage}></img>
<input  type="file" name="image_file" id="imageInput" accept="image/*" onChange={imageHandler}/> <br></br>
<div> <CheckBox/></div><br/>
          <label>Name</label>
          <input
          placeholder="Create a Name"
            type="text"
            name="name"
          //  onChange={(event) => this.props.handleChange(event)}
         value={formData.name} 
            onChange={handleChange}
          /><br/>
          <textarea
          placeholder="Create a descrpition"
          type="textarea"
            name="description"
         //   onChange={(event) => this.props.handleChange(event)}
            value={formData.description} onChange={handleChange}
          /><label>Description</label><br/><br/>

          <textarea
          placeholder="Type your script!"
          type="textarea"
            name="text_content"
         //   onChange={(event) => this.props.handleChange(event)}
            value={formData.text_content} onChange={handleChange}
          /><label>Text Content</label><br/><br/>
 
<br></br>
          
<input type="submit" value="Submit"/>

        </form> 
        </div>  
    );

  }
  



const mapStateToProps = (state) => {
//debugger;
  return {
    formData: state.storytext,
    categories: state.categories,
  
  }  
 
}



const mapDispatchToProps = dispatch => {

return {
  uploadImage: () => dispatch(uploadImage())
}
}


export default connect(mapStateToProps,  { updateForm,mapDispatchToProps, uploadImage, CreateStoryText, ListCategories} )(StoryTextForm)
