import React from 'react'

class Card extends React.PureComponent {

    componentDidMount(){
        console.log(this.props);
    }

    render(){
        const { movie }  = this.props;
        return <div className='card-container'>
           
            <div className='movie-image'>
                {movie.image && (
                    
                    <img src={`https://image.tmdb.org/t/p/original${movie.image}`} alt='movie'/>
                    )}
            </div>

            <div className='details-contaier'>
                <div className='details'>
                    <h6>{movie.title}</h6>
                    <p>({movie.rating})</p>
                </div>
                <p className='description'>{movie.description}</p>
            </div>
            
        </div>
    }
}

export default Card