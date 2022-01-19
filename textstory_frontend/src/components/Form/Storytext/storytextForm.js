import React from 'react'
import {connect} from 'react-redux'
import   {updateStoryTextForm}  from '../../../action/StoryTexts/CreateStoryTexts';
import {CreateStoryText} from '../../../action/StoryTexts/CreateStoryTexts';
import ListCategories from '../../../components/Category/categories';
import  {fetchCategories}  from '../../../action/Category/fetchCategories';
import {updateForm } from '../../../action/StoryTexts/CreateStoryTexts';




const StoryTextForm = ({formData, updateForm, user_id, createStoryText, categories}) => {


 
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




    const  handleChange = event => {
      event.preventDefault();
        const {name, value} = event.target
    
      updateForm(name, value)
      }
    

  
    


    return (  
      <div className="createStoryText"> 
      <h3> Create Script</h3>
        <form onSubmit={formData}>
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
          /><label>Description</label><br/>
 <div> <CheckBox/></div>
<br></br>
          
<input type="submit" value="Submit"/>

        </form> 
        </div>  
    );

  }
  




const mapStateToProps = state => {
  return {
    formData: state.storytext,
    categories: state.categories
    
  } 
}
 



export default connect(mapStateToProps, { updateForm, CreateStoryText, ListCategories} )(StoryTextForm)

//we can connect functions to thunk createStoryText^^



