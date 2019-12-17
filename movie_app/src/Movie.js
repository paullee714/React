import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css';


//state가 없느 function (클래스대신에 사용할 수 있음)
function Movie({title,poster, genres, synopsis}){
    return(
    <div className="Movie">
        <div className="Movie__Columns">
            <MoviePoster poster={poster} title={title} alt={title}/>
        </div>
        <div className="Movie__Columns">
            <h1>{title} </h1>
            <div className="Movie__Genres">
                {genres.map((genre,index) => <MovieGenre genre={genre} key={index}/>)}
            </div>
            <p className="Movie__Synopsis">
                {synopsis}
            </p>
        </div>
        
    </div>
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} title = {alt} alt={alt}/>
    )
}

function MovieGenre({genre}){
    return(
        <span className="Movie__Genre">{genre}</span>
    )
}


// function의 propType를 체크하는 법

MoviePoster.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

Movie.propTypes = {
    poster : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    genres :PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}

MovieGenre.propTypes= {
    genre: PropTypes.string.isRequired
}


export default Movie;