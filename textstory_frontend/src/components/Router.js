import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from './Home'
//import ListUsers from "../components/User/users";
import UsersContainer from "../containers/UsersContainer";
import StoryTextContainer from "../containers/StoryTextContainer";
import CreateStory from "./FormPresentation/Storytext/createStory";
import About from "./about";
import UserProfile from "./User/userProfile";


// ROUTING LINKS TO STORYTEXT CONTAINER(PREFIXED AS '/storyTexts') 
// ROUTED STORYTEXT FORM PREFIXED AS '/storyTextForm'
// ROUTED TO USERSCONTAINER(PREFIXED AS /users')
//ROUTED TO '/' AS HOME PATH


const Router = () => {
return (
<Switch>
    <Route exact path='/' component={Home} />
    <Route   path='/users' component={UsersContainer}/>
     <Route   path='/storyTexts' component={StoryTextContainer}/>
     <Route path='/createStory' component={CreateStory}/>
     <Route path='/about' component={About}/>
<Route path='/userProfile' component={UserProfile}/>
</Switch>

);
};












export default Router;