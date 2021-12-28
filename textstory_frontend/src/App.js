import './App.css';
import React, { Component } from 'react';
import Form from "./components/Formz";
import  { fetchUsers }  from './action/User/fetchUsers'
import  {connect}  from 'react-redux';


class App extends Component  {


componentDidMount() {
    // console.log(this.props)
    this.props.fetchUsers()
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
    users: state.users,
    loading: state.loading
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)