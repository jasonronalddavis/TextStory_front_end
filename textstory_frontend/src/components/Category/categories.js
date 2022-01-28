
import React from 'react';
import  {connect}  from 'react-redux';
import  {fetchCategories}  from '../../action/Category/fetchCategories';

//MOUNTED ON CATEGORIESSCONTAINER



class ListCategories  extends React.Component  {
  // const ListCategories = ({categories, props}) => {
  //map over category instances and display name 
  


  //FETCH CATEGORIES 
  componentDidMount(){
      this.props.fetchCategories();
    }



  //RENDER CATEGORIES
  
    render() {
      return(   
  <div className="listCategories">
  {this.props.categories.map(category => <ul key={category.id}> {category.name} </ul>)}
  </div>
      );
    };
  }
  

//MAP TO PROPS

    const mapStateToProps = state => {
      return {categories: state.categories} 
      }
  


    const mapDispatchToProps = dispatch => {
          return {
     fetchCategories: () => dispatch(fetchCategories())
          }
      }




  export default connect(mapStateToProps,mapDispatchToProps)(ListCategories);