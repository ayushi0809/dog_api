import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react';

class App extends Component {
  constructor(props){
  super(props);
  this.state= {
    breedName :[],
    breedImg:[],
    subbreed :[]
  };
  this.Breed = (B) =>{
    fetch(`https://dog.ceo/api/breed/${B}/images`)
    .then((res) => res.json())
    .then((data) => {
      this.setState({breedImg: data.message})
      console.log(this.state.breedImg);
    })
    fetch(`https://dog.ceo/api/breed/${B}/list`)
    .then((res) => res.json())
    .then((data) => {
      this.setState({subbreed: data.message})
      console.log(this.state.subbreed);
    })
  }
  
}

componentDidMount(){
  fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) => res.json())
  .then((data) => { 
    this.setState({breedName: data.message})
    console.log(Object.keys(this.state.breedName));
    console.log(Object.values(this.state.breedName)[0].length)

  })
}
  



 
render(){
  return(
    <div>
    <h1>Welcome to World Of dog!!!</h1>
    <select onChange = { e => this.Breed(e.target.value)}>
      {(Object.keys(this.state.breedName).length>0)?Object.keys(this.state.breedName).map((data) => {
        return(
          <option key = {data} value = {data} >
            {data}
          </option>
        )

      }) : console.log( "  ")}
      
    </select>
    <select onChange = {e => this.subbreed(e.target.value)}>
      {(this.state.subbreed).length>0?this.state.subbreed.map((data) => {
        return(
          <option key = {data} value = {data} >
            {data}
          </option>
        )

      }) : console.log( "  ")}
      
    </select>
    <div>
      {(this.state.breedImg.length>0)?this.state.breedImg.map((img,index) =>{
        return(
          <img key = {index} src = {img} ></img>
        )
      }): console.log(" ")}
    </div>
    
    
    {/* <button onClick = { } >Get Image</button> */}
    </div>
  )
}
}




export default App;
