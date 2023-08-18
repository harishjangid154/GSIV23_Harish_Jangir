import { HomeSharp } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import env from 'react-dotenv';
import { useLocation, useNavigate } from 'react-router'
import Header from '../Elements/Header';

function Details(props) {
    const location = useLocation();

    const his = useNavigate();


    const [movie, setMovie] = useState(location.state);

    useEffect(() => {
        const uri = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${env.apikey}`;
        const credit = `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${env.apikey}`

        const moviePromise = axios.get(uri);
        const creditPromise = axios.get(credit);


        Promise.all([moviePromise, creditPromise]).then((res) => {
            const [movieResult, creditResult] = res;
            const m = movieResult.data;
            const crew = creditResult.data.crew;
            const cast = creditResult.data.cast || [];


            const mov = {
                ...movie,
                length: m.runtime,
                rating: m.vote_averag,
                cast: cast.map((c) => c.name),
                crew: crew.filter((c) => c.department === "Directing")
            }

            setMovie(mov)
        }).catch(err => {
            console.log(err);
        })

    },[])
  return (
    <>
    <Header LeftComponent={() => <h1>Movie Details</h1>} RightComponent={() => <HomeSharp onClick={() => {
        his("/")
    }}/>} />
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
                <p><span>{movie.year} | {movie.length} | {movie?.crew?.map(c => c.name).join(", ")}</span></p>
                <p>Cast: {movie?.cast?.join(", ")}</p>
            </div>

            <div className='details-descrition'>
                <p>Description: {movie.description}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Details