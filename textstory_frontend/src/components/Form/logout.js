import React from 'react'
import { connect } from 'react-redux'
import {logout} from '../../action/User/user.js';
import { withRouter } from 'react-router-dom'


const Logout = () => {
    return(
<form
onSubmit={ (event) => {
event.preventDefault()
logout()
}
}>
    <input type="submit" value="Logout"/>
</form>
    )    
}


export default withRouter(connect(null, { logout } )(Logout))