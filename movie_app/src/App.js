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

  }

  componentDidMount(){
    fetch("https://yts.lt/api/v2/list_movies.json?sort_bt=rating")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err)) // modern javascript
    // old javascript
    // .catch(functionn(err){
    //   console.log(err);
    // })
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster = {movie.poster} key={index}/>
    })
    return movies
  }

  render(){
    return(
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }
}


export default App;
