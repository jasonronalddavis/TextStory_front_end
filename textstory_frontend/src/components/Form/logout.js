import React from 'react'
import { connect } from 'react-redux'
import {logout} from '../../action/User/user.js';
import { withRouter } from 'react-router-dom'


const Logout = ({logout}) => {
    return(

        <div className="logout">
<form onSubmit={logout}> 
    <input type="submit" value="Logout"/>
</form>
</div>
    )    
}



export default connect(null,{logout} )(Logout)