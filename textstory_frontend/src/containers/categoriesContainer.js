import React, { Component } from 'react';
import {connect} from 'react-redux'
import  {fetchCategories}  from '../action/Category/fetchCategories';

 class CategoriesContainer extends Component {

//MOUNTED ON APP
//MOUNTING FETCHED CATEGORIES 
  
  componentDidMount(){
      // console.log(this.props)
      this.props.fetchCategories();
    }


//MIGHT RENDER CATEGORY ATTRIBUTES ON APP COMPONENT FOR EXTENDED FUNCTIONALITY
    render() {
      return (
        <div className="CategoriesContainer">          
        </div>
      );
    }
  }
  



  export default connect(null, {fetchCategories})(CategoriesContainer)