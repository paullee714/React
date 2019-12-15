import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css';


//state가 없느 function (클래스대신에 사용할 수 있음)
function Movie({title,poster}){
    return(
    <div>
        <MoviePoster poster={poster}/>
        <h1>{title} </h1>
    </div>
    )
}

function MoviePoster({poster}){
    return (
        <img src={poster} alt="Movie Poster"/>
    )
}
// function의 propType를 체크하는 법

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}



export default Movie;