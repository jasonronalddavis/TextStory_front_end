import React from 'react'
import {connect} from 'react-redux'
import   {updateLoginForm }  from '../../action/loginForm';
import {login} from '../../action/User/user';
import '../FormPresentation/css/login.css';

const LoginForm = ({loginData, updateLoginForm, login}) => {

//ROOT LEVEL OF COMPONENT DIR
//MOUNTED ON APP COMPONENT


//EVENT HANDLERS
    const  handleChange = event => {
      event.preventDefault();
        const {name, value} = event.target
       const  updatedFormInfo = {
        ...loginData,
        [name]: value
       }
      updateLoginForm(updatedFormInfo)
      }
    


    const handleSubmit = event => {
    event.preventDefault()
    login(loginData)
   }
    

//RENDERED FORM 

    return (  
      <div className="login"> 
      <h3> LOGIN</h3>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
          placeholder="Create a Username"
            type="text"
            name="name"
            value={loginData.name} onChange={handleChange}
          /><br/>
          <input
          placeholder="Create a Password"
          type="text"
            name="password"
            value={loginData.password} onChange={handleChange}
          /><label>Password</label><br/>
<input type="submit" value="Login"/>
        </form> 
        </div>  
    );

  }
  

//MAP TO PROPS


const mapStateToProps = state => {
  return {
    loginData: state.LoginFormReducer
  } 
}
 



export default connect(mapStateToProps, { updateLoginForm,login })(LoginForm)

//we can connect functions to thunk login^^



