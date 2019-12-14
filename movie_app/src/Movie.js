import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Movie.css';

class Movie extends Component{

    // propTypes를 추가하면 각각의 변수에 들어올 변수형을 체크, info 해줌
    static propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired
    }
    

    render(){
        return(
        <div>
            <MoviePoster poster={this.props.poster}/>
            <h1>{this.props.title} </h1>
        </div>
        );
    }
}

class MoviePoster extends Component{

    static propTypes = {
        poster: PropTypes.string.isRequired
    }
    
    render(){
        return(
            <img src={this.props.poster} alt={this.props.title}/>
        );
    }
}

export default Movie;