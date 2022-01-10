import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from './Home'
import UsersContainer from '../containers/UsersContainer'
import ListUsers from "../components/User/users";



const Router = () => {
return (

<Switch>
<Route exact path ='/' component={Home} />
<Route exact path ='/users' component={ListUsers}/>



</Switch>

);
};


export default Router;