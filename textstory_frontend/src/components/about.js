import React, { Component } from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'

const About = () => {

//MOUNTED ON APP
  




      return (
          <div className="about" > 
       <h1>About LoreShare</h1> 
        <p>
        LoreShare is an app for creating,
        adding and sharing creative storries. 
        </p>

        <NavLink exact activeClassName="active" to="/" className="home">Home</NavLink>       

        </div>



      );






    }
  
  



  export default connect(null,)(About)