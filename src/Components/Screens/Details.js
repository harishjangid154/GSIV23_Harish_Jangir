import React from 'react'
import { useLocation } from 'react-router'

function Details(props) {
    const location = useLocation();

    const movie = location.state;
  return (
    <div className='details-page'>
        <div className='details-image'>
        {movie.image && (
            
            <img src={`https://image.tmdb.org/t/p/original${movie.image}`} alt='movie'/>
            )}
        </div>
        <div className='movie-details'>
            <div className='details-title'>
                <h4>{movie.title}</h4> <span>({movie.rating})</span>
            </div>
            <div className='details-cast'>
                <p><span>{movie.year} | {movie.length} | {movie.director}</span></p>
                <p>Cast: {movie.cast}</p>
            </div>

            <div className='details-descrition'>
                <p>Description: {movie.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Details