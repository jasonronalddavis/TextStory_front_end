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


//                const storytexts =  {...this.props.user, story_texts:  }

//
// const storyVar =  {...user,story_texts:}
//RENDER USER ATTRIBUTES
        render(){
          console.log(this.props.storytexts)
            return ( 
                <div className="User"> 
                <h1> {this.props.user.name} </h1>
                  </div> 
            )
          }
          }
          






          //MAPTOPROPS  
           const mapStateToProps = ({user},state) => {
            const storytexts =  {...user,story_texts: user.story_texts }
 //debugger;
             return {
              user,
              storytexts
            }
           }
              



//EXPORT
           export default connect(mapStateToProps,{getCurrentUser})(User);
