import React from 'react';
import  {connect}  from 'react-redux';
import '../../containers/storytexts.css'




const  UserStoryCover = () => {


      return (
  <div className="userStoryCover">  

        <img className="user_story_cover"  alt="default" src={require('../../public/user_story_list.png') }/>

        </div>
      );
    }





  export default connect(null)(UserStoryCover);