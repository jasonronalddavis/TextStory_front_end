
import React from 'react';
import  {connect}  from 'react-redux';
//MOUNTED ON USERSCONTAINER
import  {fetchCategories}  from '../../action/Category/fetchCategories';




class ListCategories  extends React.Component  {
  // const ListCategories = ({categories, props}) => {
  //map over category instances and display name 
  
  componentDidMount(){
      // console.log(this.props)
      this.props.fetchCategories();
    }
  
    render() {
     
      return(   
  <div className="listCategories">
 
  {this.props.categories.map(category => <ul key={category.id}> {category.name} </ul>)}
  </div>
      );
    };
  }
  
    const mapStateToProps = state => {
      return {categories: state.categories}
      
      }
  
    const mapDispatchToProps = dispatch => {
          return {
     fetchCategories: () => dispatch(fetchCategories())
          }
      }

  export default connect(mapStateToProps,mapDispatchToProps)(ListCategories);