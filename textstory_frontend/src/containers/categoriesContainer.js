import React, { Component } from 'react';
import {connect} from 'react-redux'
import  {fetchCategories}  from '../action/Category/fetchCategories';
import ListCategories from '../components/Category/categories';

 class CategoriesContainer extends Component {

//MOUNTED ON APP
//MOUNTING FETCHED CATEGORIES 
  
  componentDidMount(){
      // console.log(this.props)
      this.props.fetchCategories();
    }



    render() {
      return (
        <div className="CategoriesContainer">          
        </div>
      );
    }
  }
  



  export default connect(null, {fetchCategories})(CategoriesContainer)