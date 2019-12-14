import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

class App extends Component{
  // 렌더링 과정 : UNSAFE_componentWillMount() --> render() --> componentDidMount()순서
  // 업데이트 과정 : UNSAFE_componentWillReceiveProps() --> shouldComponenetUpdate() --> compoenentWillUpdate() --> render() --> componentDIdUpdate()
  
  UNSAFE_componentWillMount(){
  }

//state가 변경되면 다시한번 render
  state = {
    greeting : 'hello!',
    movies:[
      {
        title : "Matrix",
        poster : "https://633987.smushcdn.com/907311/wp-content/uploads/2019/08/lede-the-matrix-1300x731.jpg?lossy=1&strip=1&webp=1"
      },
      {
        title : "Full Matel Jacket",
        poster : "https://t1.daumcdn.net/cfile/tistory/9915D6355CC497ED03",
      },
      {
        title: "oldboy",
        poster :"https://m.media-amazon.com/images/M/MV5BZWFlZWI3MWQtODgzOS00MjVmLTg2ODMtOWE3NWFjOWZkMTY4XkEyXkFqcGdeQXVyMjQ1NjEyNzE@._V1_UY268_CR3,0,182,268_AL_.jpg"
      },
      {
        title :"starwars",
        poster:"https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fstar-wars-jedi-fallen-order%2Fhome%2FSWFJO_Standard_Keyart_1920x1080-1920x1080-7a42241ea451299ac73036ac61eb73c1184753e0.jpg"
      }
    ]
  }

  componentDidMount(){
    setTimeout(()=> {
      this.setState({
        movies: [
          {
            title:"Transporting",
            poster:"http://collider.com/wp-content/uploads/trainspotting_movie_image_ewan_mcgregor_01.jpg"
          },
          ...this.state.movies //이전영화를 한번 더 부르는 것
        ]
      })
    },2000)
  }



  render(){
    return(
      <div className="App">
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster = {movie.poster} key={index}/>
        })}
      </div>
    );
  }
}


export default App;
