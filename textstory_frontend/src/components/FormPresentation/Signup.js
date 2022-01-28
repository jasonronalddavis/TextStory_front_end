
import React from 'react'
import { connect } from 'react-redux'
import {signup } from "../../action/User/signup.js"
import {updateSignupForm} from "../../action/User/signup.js"
import '../FormPresentation/css/signup.css'


//ROOT LEVEL OF COMPONENT DIR
//MOUNTED ON APP COMPONENT


const Signup = ({signupFormData, updateSignupForm, signup}) => {


//EVENT HANDLERS
const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData)  
  }




  const  handleChange = event => {
      event.preventDefault();
        const {name, value} = event.target
       const  updatedFormInfo = {
        ...signupFormData,
        [name]: value
       }
       updateSignupForm(updatedFormInfo) 
  }


//RENDERED FORM 

return (
<div className= "signup">
<h3> SIGNUP </h3>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
       
          placeholder="Create a Username"
            type="text"
            name="name"
          //  onChange={(event) => this.props.handleChange(event)}
            value={signupFormData.name} onChange={handleChange}
          /><br/>
          <input
          placeholder="Create a Password"
          type="text"
            name="password"
         //   onChange={(event) => this.props.handleChange(event)}
            value={signupFormData.password} onChange={handleChange}
          /><label>Password</label><br/>
<input type="submit" value="signup"/>
        </form>  
        </div>      
)  
}

//MAP TO PROPS


const mapStateToProps = state => {
  return {
  signupFormData: state.signup
  } 
}



export default connect(mapStateToProps, { updateSignupForm, signup})(Signup)

