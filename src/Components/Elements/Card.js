import React from 'react'
import { useNavigate } from 'react-router';

function Card(props) {

    const his = useNavigate();

    const {movie} = props;
    return <div className='card-container'>
           
    <div className='movie-image'>
        {movie.image && (
            
            <img src={`https://image.tmdb.org/t/p/original${movie.image}`} alt='movie'/>
            )}
    </div>

    <div className='details-contaier'>
        <div className='details' onClick={() => {
           his("/details", {state: movie})
        }}>
            <h6>{movie.title}</h6>
            <p>({movie.rating})</p>
        </div>
        <p className='description'>{movie.description}</p>
    </div>
    
</div>
}

export default Card