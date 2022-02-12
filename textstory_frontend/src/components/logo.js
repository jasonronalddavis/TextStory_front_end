import React, { Component } from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import "../App.css";




const Logo = () => {

//MOUNTED ON APP
  

      return (
          <div > 
     {<img className="AppLogo" style={{ alignSelf: 'center' }}  alt="default" src={require('../public/Logo.png') }/>}

        </div>


      );






    }
  
  



  export default connect(null,)(Logo)