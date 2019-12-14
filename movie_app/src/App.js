import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'


const movieTitle = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImgaes = [
  "https://633987.smushcdn.com/907311/wp-content/uploads/2019/08/lede-the-matrix-1300x731.jpg?lossy=1&strip=1&webp=1",
  "https://t1.daumcdn.net/cfile/tistory/9915D6355CC497ED03",
  "https://m.media-amazon.com/images/M/MV5BZWFlZWI3MWQtODgzOS00MjVmLTg2ODMtOWE3NWFjOWZkMTY4XkEyXkFqcGdeQXVyMjQ1NjEyNzE@._V1_UY268_CR3,0,182,268_AL_.jpg",
  "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fstar-wars-jedi-fallen-order%2Fhome%2FSWFJO_Standard_Keyart_1920x1080-1920x1080-7a42241ea451299ac73036ac61eb73c1184753e0.jpg"
]


class App extends Component{
  render(){
    return(
      <div className="App">
        <Movie title={movieTitle[0]} poster={movieImgaes[0]}/>
        <Movie title={movieTitle[1]} poster={movieImgaes[1]}/>
        <Movie title={movieTitle[2]} poster={movieImgaes[2]}/>
        <Movie title={movieTitle[3]} poster={movieImgaes[3]}/>
      </div>
    );
  }
}


export default App;
