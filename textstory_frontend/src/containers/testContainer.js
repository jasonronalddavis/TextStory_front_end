import React, { Component } from 'react';
import {connect} from 'react-redux'
import './storytexts.css'

 class TestContainer extends Component {

//MOUNTED ON APP
//MOUNTING FETCHED CATEGORIES 
  
 

//MIGHT RENDER CATEGORY ATTRIBUTES ON APP COMPONENT FOR EXTENDED FUNCTIONALITY
    render() {
      return (
        <div className="TestContainer">  
        <h1>"BARNES!"</h1>        
        </div>
      );
    }
  }
  



  export default connect(null,)(TestContainer)