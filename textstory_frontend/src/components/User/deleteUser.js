import React from 'react'
import { connect } from 'react-redux'
import {destroyUser} from  '../../action/User/user';
import {getCurrentUser} from '../../action/User/user';
import user from './user';

import "./User.css";
//MOUNTED ON USERPROFILE COMPONENT




//MOUNTED ON APP
class Delete extends React.Component {


componentDidMount () {
this.props.getCurrentUser();

}


    handleSubmit = () => {
   
      }


render(){
    console.log(this.props)
    return(
        <div className="deleteAccount">
<form onSubmit={this.handleSubmit()}> 
    <input type="submit" value="Delete Account"/>
</form>
</div>
    )    
}
}




export default connect(null,{getCurrentUser} )(Delete)