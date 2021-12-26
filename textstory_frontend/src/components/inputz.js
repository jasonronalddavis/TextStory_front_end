import React, { Component } from 'react';

class Inputz extends Component {



    state = {
        firstName: "",
        lastName: "",
      };



      handleSubmit = (event) => {
        this.setState({
          firstName: event.target.value,
        });
      };
    
    
   

  render() {
    return (

        
        <form onSubmit={this.handleSubmit}>

        <label htmlFor="username">Username</label>

          <input
            type="text"
            name="name"
          //  onChange={(event) => this.props.handleChange(event)}
            value={this.props.formData}
          />


          <input
          type="password"
            name="name"
         //   onChange={(event) => this.props.handleChange(event)}
            value={this.props.formData}
          />


<input type="submit" />

        </form>
     
    );

  }
};

export default Inputz;