import React from 'react'
import {connect} from 'react-redux'
import {CreateStoryText} from '../../../action/StoryTexts/CreateStoryTexts';
import ListCategories from '../../../components/Category/categories';
import {updateForm } from '../../../action/StoryTexts/CreateStoryTexts';
import '../../../styles/FormImages.css';
import { useEffect, useState } from "react";
import {uploadImage} from '../../../action/StoryTexts/CreateStoryTexts';
import {updateCat} from '../../../action/StoryTexts/CreateStoryTexts';
import CatCheckBox from './catCheckBox';


//MOUNTED ON STORYTEXT CONTAINER

// TODO: Look into using a useEffect hook so when there is a change isChecked you
// can update the formData obj.

const StoryTextForm = ({formData, updateForm,uploadImage,updateCat, CreateStoryText,categories}) => {




//HOOKS

//IMAGE UPLOAD HOOK
   const [newImage, setNewImage] = useState('');
   //CATEGORY CHECKBOX HOOK
   const [isChecked, setIsChecked] = useState(new Array(categories.length).fill(true)); 
//formData.categories UPDATE FROM CHECKBOX HOOK
const [checkedCategories, setCategories] = useState(formData.categories)




//ONCHANGE HANDLERS
const imageHandler = (e, state) => {
  const  image_file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(image_file)
  e.persist(image_file)
  reader.onloadend = () => {
      const newImg = reader.result
   setNewImage(newImg)
  uploadImage(image_file,newImg,newImage) //IMAGE FILE NOT PERSISTING TO STATE 
   console.log(formData.image_file)
    //debugger;
  }
}


//CATERGORY CHECKBOX
  const handleCheckboxChange = (e) => {
    e.preventDefault()
    const checks = [...isChecked] // Make a copy of setIsChecked
    const idxToFind = parseInt(e.target.parentElement.parentElement.dataset.idx, 10) // grt the dataset idx off the parent element
    checks[idxToFind] = !checks[idxToFind] // update the value to opposite of what it was
    setIsChecked(checks) // update the state based on the function passed down
    // TODO update formData when state updates via useEffect 
  const catObj =  categories.filter((cat,index, checks) => (cat, index + 1 === idxToFind + 1) )
//RETRIEVED CATEGORY OBJECTS

const updateForm = {
...,formData,
[categories]: catObj 
}

debugger;
  }



//LESS DYNAMIC FORM INPUT CHANGES
    const  handleChange = (e) => {
        const updatedFormInfo = {
          ...formData,
          [e.name]: e.value
        }
   const input = e.target
      e.persist(e.target)
      updateForm(updatedFormInfo,input)
      }


//SUBMIT FORM
    const handleSubmit = event => {
    event.preventDefault()
    CreateStoryText(formData, newImage)
   }




//RENDER FORM
const DefaultImage = () => {  //FOR PRESENTAIION MOUNTED ON FORM
  return (
<img  src={require('../../../public/DefaultImage.png')} alt="" id="StDefimg" className="img" onChange={imageHandler}/>
  )
}


  return (
      <div className="createStoryText">
      <h3> Create Story</h3>
        <form onSubmit={handleSubmit}><br></br>
          
     <div> <CatCheckBox //CHECKBOX
     handleCheckboxChange={handleCheckboxChange} 
     isChecked={isChecked} 
     setIsChecked={setIsChecked}/></div><br/>

     <DefaultImage/><br></br>
        <img className="imagePreview" // JUST FOR PRESENTATION FOR NOW WILL INSERT UPLOADED IMAGE LATER
          alt={""}
          src={newImage}></img>


      <input //IMAGE UPLOAD INPUT 
        type="file" 
          name="image_file" 
          id="imageInput" 
          accept="image/*" 
           onChange={imageHandler}/><br></br>


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
  return {
    formData: state.storytext,
    categories: state.categories,
  }
}



export default connect(mapStateToProps,  { updateForm,updateCat, uploadImage, CreateStoryText, ListCategories} )(StoryTextForm) 