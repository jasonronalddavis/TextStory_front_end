import React from 'react'
import {connect} from 'react-redux'
import {CreateStoryText} from '../../../action/StoryTexts/CreateStoryTexts';
import ListCategories from '../../Category/categories';
import {updateForm } from '../../../action/StoryTexts/CreateStoryTexts';
import { useEffect, useDispatch,useState } from "react";
import {uploadImage} from '../../../action/StoryTexts/CreateStoryTexts';
import {updateCat} from '../../../action/StoryTexts/CreateStoryTexts';
import CatCheckBox from './catCheckBox';
import Select from 'react-select'
import axios from 'axios'




//MOUNTED ON STORYTEXT CONTAINER

// TODO: Look into using a useEffect hook so when there is a change isChecked you

const CreateStory = ({formData, updateForm,uploadImage,updateCat, CreateStoryText,categories}) => {




//HOOKS

//IMAGE UPLOAD HOOK
   const [newImage, setNewImage] = useState('');
   //CATEGORY CHECKBOX HOOK FOR EXTENDED FUNCTIONALITY
  // const [isChecked, setIsChecked] = useState(new Array(categories.length).fill(false)); 
//formData.categories UPDATE storytext.categories setIsChecked HOOK
const [matchedCategories, setCategories] = useState("")




//ONCHANGE HANDLERS
const imageHandler = (e, state) => {
  const  image_file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(image_file)
  e.persist(image_file)
 const value = ""
  reader.onloadend = () => {
    
      const newImg = reader.result
   setNewImage(newImg)
  uploadImage(image_file,newImg,newImage) 
   console.log(formData.image_file)
    //debugger;
  }
}

const handleCatchange = (e, state) =>  {
  //debugger;
        const updatedFormInfo = {
          ...formData,
          [e.name]: e.value
        }
   const input = e
   const catName = e.value
   setCategories(catName)
   
    //  e.persist(e)
      updateForm(updatedFormInfo,input)
      }




//LESS DYNAMIC FORM INPUT CHANGES
    const  handleChange = (e) => {
        const updatedFormInfo = {
          ...formData,
          [e.target.name]: e.target.value,
        }
   const input = e.target
      e.persist(e.target)
      updateForm(updatedFormInfo,input)
      }


//SUBMIT FORM
    const handleSubmit = event => {
   
    CreateStoryText(formData,matchedCategories,newImage)
   }




//RENDER FORM
const DefaultImage = () => {  //FOR PRESENTAIION MOUNTED ON FORM
  return (
<img  src={require('../../../public/DefaultImage.png')} alt="" id="StDefimg" className="img" onChange={imageHandler}/>
  )
}


  return (
      <div className="createStoryText">
      <h3> Create Story</h3><br></br>Choose a Category
        <form onSubmit={handleSubmit}>
        <br></br><br></br><br></br>
    

   <br></br>  <DefaultImage/><br></br>
        <img className="imagePreview" // JUST FOR PRESENTATION FOR NOW WILL INSERT UPLOADED IMAGE LATER
          alt={""}
          src={newImage}></img><br></br><br></br>


      <input //IMAGE UPLOAD INPUT 
      
        type="file" 
          name="image_file" 
          id="imageInput" 
          accept="image/*" 
           onChange={imageHandler}/><br></br><br></br>
<Select
className="CatSelect"   //CATEGORY
   onChange={handleCatchange}
   options={
      categories.map((c, index) => {
         return {
          label: c.name,
            value: c.name,
            key: index,
            name: "categories"
         }
      })
   }
/>



          <label>Name</label>
          <input
          placeholder="Create a Name"
            type="text"
            name="name"
          //  NAME
         value={formData.name}
            onChange={handleChange}
          /><br/>

          <textarea
          placeholder="Create a descrpition"
          type="textarea"
            name="description"
         //   DESCRIPTION
            value={formData.description} onChange={handleChange}
          /><label>Description</label><br/><br/>

          <textarea
          placeholder="Type your script!"
          type="textarea"
            name="text_content"
         //   TEXT CONTENT
            value={formData.text_content} onChange={handleChange}
          /><label>Text Content</label><br/><br/>
<br></br>
<input type="submit" value="Submit"/>
        </form>
        </div>
    );
  }





//MAPSTATE
const mapStateToProps = (state) => {
//debugger;
  return {
    formData: state.storytext,
    categories: state.categories,

  }
}



export default connect(mapStateToProps,  { updateForm,updateCat, uploadImage, CreateStoryText, ListCategories} )(CreateStory) 