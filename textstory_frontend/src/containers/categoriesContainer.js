import React, { Component } from 'react';
import {connect} from 'react-redux'
import  {fetchCategories}  from '../action/Category/fetchCategories';
import ListCategories from '../components/Category/categories';

 class CategoriesContainer extends Component {



  
  componentDidMount(){
      // console.log(this.props)
      this.props.fetchCategories();
    }


    render() {
      return (
        <div className="CategoriesContainer">  
         <h1 id="CategoriesHeader"></h1>
        
        </div>
      );
    }
  }
  



  export default connect(null, {fetchCategories})(CategoriesContainer)