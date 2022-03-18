import React, { Component } from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import  {fetchStoryTexts}  from '../action/StoryTexts/FetchStoryTexts';
import CreateStory from '../components/FormPresentation/Storytext/createStory';
import EditStory from '../components/FormPresentation/Storytext/editStory';
import ListStoryTexts from '../components/StoryText/storytexts';
import UserStoryTexts from '../components/User/user_storytexts';
import './storytexts.css'
import '../components/Home.css'
import {getCurrentUser} from '../action/User/user';
import {setValues} from '../action/StoryTexts/EditStoryText';
import {setVal} from '../action/StoryTexts/EditStoryText';
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
    view: false,
    viewStory: false
    };
    this.setValue = this.setValue.bind(this)
    }

  componentDidMount(){
    this.props.getCurrentUser()
    this.setState({edit:false, delete: false, create: false, viewStory: false, view: false })
    window.addEventListener('click', (e) => this.turnOffCreate(e));
 
    }

componentDidUnMount(){

this.setState({edit:false, delete: false, create: false, viewStory: false, view: false })


 }


      refresh = () => {
      window.location.reload();
      }

      turnOffCreate(e){
        e.target.name == "viewStory" || e.target.name == "view" ? this.setState({create: false }) : null
      // e.target.name == "create" || e.target.name == "edit" ? this.setState(prevState => ({view: [...prevState.view, false]})) : null
     //  e.target.name == "create" || e.target.name == "edit" ? this.setState(prevState => ({viewStory: [...prevState.viewStory, false]})) : null

      }


      setValue(e){
        //SETTING BOOLEANS TO LOCAL STATE 
        const eVal = e.target
        const name = eVal.getAttribute("name")
        this.setState({edit: false});
        this.setState({create: false});
        this.setState({view: false});
        this.setState({delete: false});
        this.setState({viewStory: false});
        const values = this.props.values
        this.props.setValues(values,name)
        this.props.setVal(values,name)
        this.setState({[name]: true});
      }


    render() {

      return (
  <div className="StoryTextContainer">  

    <h1 className="ScriptHeader">All Stories</h1> 
  
      <NavLink exact activeClassName="active" to="/" className="homeLink">Home</NavLink>       
      {this.props.edit === true ? <EditStory/>  : null}   
      {this.state.create === true ? <CreateStory/>  : null} 
      <button className="refresh" onClick={this.refresh} variant="text">refresh</button>
  
      <img className="Edit" id="edit" name="edit" onClick={this.setValue} value={this.state.edit}  src={require('../public/EDIT.png')} alt='edit' />
   

      <img className="Delete" src={require('../public/DELETE.png')} alt='delete' />
   
 
        <img className="Create" id="create" name="create" onClick={this.setValue} value={this.state.create} src={require('../public/CREATE.png')} alt='create' />
        
        <UserStoryTexts/>
        <ListStoryTexts />
        
        </div>
      );
    }
  }
  

        const mapStateToProps = (state) => {
            return {
            edit: state.storytext.edit,
            create: state.storytext.create,
            view: state.storytext.view,
            viewStory: state.storytext.viewStory,
            delete: state.storytext.delete,
            values: state.storytext
            }
          }





  export default connect(mapStateToProps, {fetchStoryTexts,setValues, setVal, getCurrentUser})(StoryTextContainer)