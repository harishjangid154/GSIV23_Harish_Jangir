import React from 'react'
import env from 'react-dotenv'
import Header from '../Elements/Header'
import Search from '../Elements/Search'
import axios from 'axios';
import Card from '../Elements/Card';
import { HomeSharp } from '@material-ui/icons';


class Home extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            moviesList: [],
            totalPage: 1
        }

        this.listRef = React.createRef();
    }

    componentDidMount(){
        this.fetch();
    }


    fetch = async (page) => { 

        // a. Movie Title
// b. Rating (average vote)
// c. Year of release
// d. Length (HH:MM)
// e. Director
// f. Cast (Comma separated list of actors)
// g. Description
     axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${env.apikey}&page=${page}&sort_by=primary_release_date.desc`).then(res => {
    //   console.log("res", res.data);
      const movies = res.data.results && res.data.results.length && res.data.results.map((movie)  => {
        return {
            title: movie?.original_title,
            description: movie?.overview,
            rating: movie?.vote_average,
            year: movie?.release_date && new Date(movie.release_date).getFullYear(),
            image:  movie?.poster_path,
            id: movie?.id
        }
      })
      this.setState({moviesList: movies})
    }).catch(er => {
      console.log(er);
    })
    }


    render(){
        return (
            <div ref={r => this.listRef = r} onLoad={() => {
                
            }} className='app-container'>
                <Header LeftComponent={Search} RightComponent={(props) => <HomeSharp/> } />
                <div className='movie-container'>

                {this.state.moviesList.map((movie) => <Card movie={movie} key={movie.id} />)}
                </div>
            </div>
          )
    }
}


export default Home