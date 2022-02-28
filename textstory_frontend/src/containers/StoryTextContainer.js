import React, { Component } from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import  {fetchStoryTexts}  from '../action/StoryTexts/FetchStoryTexts';
import { Link } from 'react-router-dom'
import CreateStory from '../components/FormPresentation/Storytext/createStory';
import ListStoryTexts from '../components/StoryText/storytexts';
import UserStoryTexts from '../components/User/user_storytexts';
import './storytexts.css'
import '../components/Home.css'
import {getCurrentUser} from '../action/User/user';
import EditStory from '../components/FormPresentation/Storytext/editStory';
import TestEdit from './testEdit';
import TestCreate from './testCreate';

//IMPORTING FORM AND LIST OF STORY TEXTS
// NAVLINK MOUNTED FROM ROUTER TO RETURN HOME
//CONTAINS EDIT CREATE AND DELETE BUTTONS WHICH WILL EVENTUALLY ROUTE TO CRUD MODULES

//ATTEMPTING TO MAP BOOLEAN VALUES TO CRUD COMPONENTS. IF CLICKED, RENDER COMPONENT
class StoryTextContainer extends Component {

constructor(props){
super(props);
this.state = {
create: false,
edit: false,
delete: false,
view: false
};
this.setValue = this.setValue.bind(this)
}

  componentDidMount(){
    this.props.getCurrentUser()  
    console.log(this.state.edit)
 }



refresh = () => {
window.location.reload();
}





setValue(e){

  
   const eVal = e.target
  const value = eVal.getAttribute("value")
const name = eVal.getAttribute("name")
console.log(eVal.getAttribute("name"))
this.setState({edit: false});
this.setState({create: false});
this.setState({view: false});
this.setState({delete: false});
this.setState({[name]: true});

console.log({...this.state})


}


//<NavLink exact activeClassName="active" to='../components/FormPresentation/Storytext/createStory' className="createLink">
//<img className="Create" src={require('../public/CREATE.png')} alt='view' />
//</NavLink>       
// {this.state.edit == true : <TestEdit/> }

    render() {

      return (
  <div className="StoryTextContainer">  

<h1 className="ScriptHeader">All Stories</h1> 
  
  <NavLink exact activeClassName="active" to="/" className="homeLink">Home</NavLink>       

   {this.state.edit === true ? <TestEdit/>  : null}   
    {this.state.create === true ? <CreateStory/>  : null} 

    <button className="refresh" onClick={this.refresh} variant="text">refresh</button>

    
      <img className="Edit" id="edit" name="edit" onClick={this.setValue} value={this.state.edit}  src={require('../public/EDIT.png')} alt='edit' />
   

  <button> 
    <img className="Delete" src={require('../public/DELETE.png')} alt='delete' />
      </button> 

   
        <img className="Create" id="create" name="create" onClick={this.setValue} value={this.state.create} src={require('../public/CREATE.png')} alt='create' />
          
            

        <UserStoryTexts/>
        <ListStoryTexts/>
        
        </div>
      );
    }
  }
  

const mapStateToProps = (user) => {

  return {
user

  }
}


  export default connect(mapStateToProps, {fetchStoryTexts, getCurrentUser})(StoryTextContainer)