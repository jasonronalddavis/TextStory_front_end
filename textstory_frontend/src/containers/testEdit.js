import React, { Component } from 'react';
import {connect} from 'react-redux'
import './storytexts.css'

 class TestEdit extends Component {

//MOUNTED ON APP
//MOUNTING FETCHED CATEGORIES 
  
 

//MIGHT RENDER CATEGORY ATTRIBUTES ON APP COMPONENT FOR EXTENDED FUNCTIONALITY
    render() {
      return (
        <div className="TestEdit">  
        <h1>"EDIT"</h1>        
        </div>
      );
    }
  }
  



  export default connect(null,)(TestEdit)