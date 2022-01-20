import React from 'react'
import {connect} from 'react-redux'
import   {updateStoryTextForm}  from '../../../action/StoryTexts/CreateStoryTexts';
import {CreateStoryText} from '../../../action/StoryTexts/CreateStoryTexts';
import ListCategories from '../../../components/Category/categories';
import  {fetchCategories}  from '../../../action/Category/fetchCategories';
import {updateForm } from '../../../action/StoryTexts/CreateStoryTexts';
import '../../../styles/FormImages.css';



const StoryTextForm = ({formData, updateForm, user_id, image, imageInput, createStoryText, categories, props}) => {


 
const CheckBox = ({label, value, onChange}) => {
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
  const preview = document.querySelector("StDefimg");




const ImgageSelect = ({label,imageInput, value, onChange}) => {
return (
<label htmlFor={imageInput} className="image-upload"> </label>
)
}





const imageHandler = (e) => {
  const reader = new FileReader();
  reader.onload = () => {
 if(reader.readyState === 2){
 debugger;
 formData.image_url = (reader.result)
  }
  }
  reader.readAsDataURL(e.target.files[0])
}



const DefaultImage = () => {
  return (
    
<img  src={SrC} alt="" id="StDefimg" className="img" onChange={imageHandler}/>
  )
}



    const  handleChange = event => {
      event.preventDefault();
        const {name, value} = event.target
      updateForm(name, value)
      }
    

    const handleSubmit = event => {
    event.preventDefault()
    CreateStoryText(formData)
   }
    
    
  


    return ( 
       
      <div className="createStoryText"> 
      <h3> Create Script</h3>
        <form onSubmit={handleSubmit}><br></br>

<DefaultImage/>
<input  type="file" name="image-upload" id="imageInput" accept="image/*" onChange={imageHandler}/> <br></br>
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
            name="description"
         //   onChange={(event) => this.props.handleChange(event)}
            value={formData.text_content} onChange={handleChange}
          /><label>Text Content</label><br/><br/>
 
<br></br>
          
<input type="submit" value="Submit"/>

        </form> 
        </div>  
    );

  }
  

const Event = e => {
return (
  e.target.files[0]
)
} 

const file = () => { return (document.querySelector("imageInput").files[0])
  
  } 

const mapStateToProps = state => {
  //debugger;
  return {
    formData: state.storytext,
    categories: state.categories,
    image: state.storytext.image_url
     
  }  
}
 

const mapDispatchToprops = dispatch =>  {
return 
(null)
}
const SrC = () => {require('../../../public/DefaultImage.png')}


export default connect(mapStateToProps, { updateForm,SrC, mapDispatchToprops,CreateStoryText, ListCategories} )(StoryTextForm)

//we can connect functions to thunk createStoryText^^



