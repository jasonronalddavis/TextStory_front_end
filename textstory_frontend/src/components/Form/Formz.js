import React from 'react'
import {connect} from 'react-redux'
import   {updateLoginForm }  from '../../action/loginForm';
import {login} from '../../action/User/user';
import {useDispatch} from 'react-redux';


const Form = ({loginData, updateLoginForm, login}) => {


const dispatch = useDispatch()

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
    


    return (  
      
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
          placeholder="Create a Username"
            type="text"
            name="name"
          //  onChange={(event) => this.props.handleChange(event)}
            value={loginData.name} onChange={handleChange}
          /><br/>
          <input
          placeholder="Create a Password"
          type="text"
            name="password"
         //   onChange={(event) => this.props.handleChange(event)}
            value={loginData.password} onChange={handleChange}
          /><label>Password</label><br/>
<input type="Submit" value="Login"/>
        </form>   
    );

  }
  
const mapDispatchToProps = dispatch => {
  return {
updateLoginForm: (e) => dispatch(updateLoginForm()),
login: (e, credentials) => dispatch(login(e, credentials)),
  }
}



const mapStateToProps = state => {
  return {
    loginData: state.LoginFormReducer
  } 
}
 



export default connect(mapStateToProps,{ updateLoginForm, login})(Form)

//we can connect functions to thunk login^^



