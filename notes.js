fetch("http://localhost:3001/api/v1/users/login",{
  method: "post",
 headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
        }
 })
 .then(r => r.json())
 .then( function(object){
    // new StoryText(object.attributes);
     console.log(object);
   })




    const r = await fetch("http://localhost:3001/api/v1/story_texts/create")
    const storytexts = await r.json()
    console.log(storytexts)






export const setCategories = categories => {

return {
 type: "FETCH_CATEGORIES",
  payload: categories.data

    }
}




export const fetchCategories = () =>  {
  return async dispatch => {
    const c = await fetch("http://localhost:3001/api/v1/categories")
    const categories = await r.json()
    return dispatch(setCategories(categories))
}
}


     const r = await fetch("http://localhost:3001/api/v1/categories")
    const categories = await r.json()
    console.log(categories)
}
}



this.props.fetchCategories().then(r => r.json())
.then(resp => { console.log(resp)})




function (arr1, arr2) {
  for(fruits in arr1){
      console.log(arr1[fruits]);
  }
  for(numbers in arr2){
    console.log(arr2[numbers]);
  }
}

//BUTTONS

import Button from '@material-ui/core/Button';




import { Link } from 'react-router-dom'


<Link to="/dashboard">
    <img src={minLogo} alt='Logo' />
</Link>



<img className="story_texts_cover"   alt="default" src={require('./public/storytexts_list.png') }
/>



{storytexts.map((storytext, index) => (
  <div key={index}>
    {storytext.index.map((s, i) => (
      <div key={i}>
        <h3>{s.name}</h3>
      </div>
    ))}
  </div>
))}

///
d

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;  }
}

//Change Square’s render method to show that value by replacing {/* TODO */} with {this.props.value}:

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}      </button>
    );
  }
}



class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"        onClick={() => this.setState({value: 'X'})}      >
        {this.state.value}      </button>
    );
  }
}


class Board extends React.Component {
  constructor(props) {    super(props);    this.state = {      squares: Array(9).fill(null),    };  }
  renderSquare(i) {
    return <Square value={i} />;
  }



  renderSquare(i) {
    return <Square value={this.state.squares[i]} />;  }


    var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});










fetch("http://localhost:3001/api/v1/get_user_stories", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
  
    })
    .then(r => r.json())
    .then(response => {response})