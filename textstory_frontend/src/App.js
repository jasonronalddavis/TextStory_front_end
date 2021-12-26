import './App.css';
import React, { Component } from 'react';
import Form from "./components/Formz";
import  {fetchUser}  from './action/User/fetchUser'
import  {connect}  from 'react-redux';


class App extends Component  {


componentDidMount() {
    // console.log(this.props)
    this.props.fetchUser()
  }


render() {
  return (

    <div className= "App">
   <Form/>
    </div>
  )
}


}


const mapStateToProps = state => {
  return {
    user: state.user,
    loading: state.loading
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)