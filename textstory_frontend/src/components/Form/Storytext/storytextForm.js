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
import {updateCat} from '../../../action/StoryTexts/CreateStoryTexts';
import CatCheckBox from './catCheckBox';

const StoryTextForm = ({formData, updateForm,uploadImage,updateCat, CreateStoryText,categories}) => {

 // const formState = (event,value) => {  const formAttributes = {...formData, [categories]: event.target.value }}

   const [newImage, setNewImage] = useState('');






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
  const newImg = reader.result
  uploadImage(image_file,newImg,newImage)
  //e.persist(newImage)
//debugger;
   console.log(formData.image_file)
    //debugger;
  }
}





    const  handleChange = (e) => { 
    const {name,value} = e.target 
        const updatedFormInfo = {
          ...formData,
          [e.name]: e.value
        }
    //const input = e.target
     //   e.persist(e.target)
     // updateForm(updatedFormInfo,input)
      }
  



    const handleSubmit = event => {
    event.preventDefault()
    //debugger;
    CreateStoryText(formData, newImage)
   }
    
    
  
 
    return ( 
       
      <div className="createStoryText"> 
      <h3> Create Story</h3>
        <form onSubmit={handleSubmit}><br></br>
        <div> <CatCheckBox/></div><br/>
<DefaultImage/><br></br>

<img className="imagePreview" src={newImage}></img>
<input  type="file" name="image_file" id="imageInput" accept="image/*" onChange={imageHandler}/> <br></br>


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






export default connect(mapStateToProps,  { updateForm,updateCat, uploadImage, CreateStoryText, ListCategories} )(StoryTextForm)