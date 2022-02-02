import React from 'react';
import  {connect}  from 'react-redux';
import {getCurrentUser} from '../../action/User/user';
import './User.css'



//MOUNTED ON APP
//LOGGED IN USER

class User extends React.Component  { 



//FETCHING CURRENT USER 

    componentDidMount(){
        this.props.getCurrentUser()  
        }


//                const storytexts =  {...this.props.user, story_texts: {this.map(t => t)} }

//
// const storyVar =  {...user,story_texts:}
//RENDER USER ATTRIBUTES
        render(){
          //debugger;
        //  console.log(this.props.storytexts)
            return ( 
                <div className="User"> 
                <h1> {this.props.user.name} </h1>

                  </div> 
            )
          }
          }
          






          //MAPTOPROPS  
           const mapStateToProps = ({user},state) => {
//debugger;
             return {
              user,
              storytexts: user.story_texts
            }
           }
              



//EXPORT
           export default connect(mapStateToProps,{getCurrentUser})(User);
