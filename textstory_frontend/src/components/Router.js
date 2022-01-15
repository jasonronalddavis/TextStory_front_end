import React from 'react';
import {Switch,Route} from 'react-router-dom'
//import Home from './Home'
import ListUsers from "../components/User/users";



const Router = () => {
return (

<Switch>
<Route exact path ='/users' component={ListUsers}/>
</Switch>

);
};


export default Router;