import React from 'react'
import env from 'react-dotenv'
import Header from '../Elements/Header'
import Search from '../Elements/Search'
import axios from 'axios';
import Card from '../Elements/Card';
import { HomeSharp } from '@material-ui/icons';
import {Navigate, Navigator} from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { actions } from '../../store/movieReducer';


class Home extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            moviesList: [],
            totalPage: 1,
            currentPage:1,
            currentSearchPage: 1,
            totalSearchResultPage: 1,
            searchQuery: ""
        }

        this.listRef = React.createRef();
    }

    componentDidMount(){
        this.fetch();
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
    ) {
      if(this.state.searchQuery){
        this.makeSearch(this.props.currentSearchPage+1, this.props.searchQuery);
        return;
      }
      this.fetch(this.props.currentPage+1);
      
    }
    }



    componentWillUnmount(){
      window.removeEventListener("scroll", this.handleScroll)
    }


    makeSearch = async (page = 1, searchQuery = "") => {
        if(page > this.props.totalSearchResultPage){
          return;
        }


        if(!searchQuery){
          this.fetch(page);
          return
        }

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${env.apikey}&query=${searchQuery}&page=${page}}`).then(res => {


        const totlaPage = res.data.total_pages;
        let movies = []
       movies = res.data.results && res.data.results.length && res.data.results.map((movie)  => {
        return {
            title: movie?.original_title,
            description: movie?.overview,
            rating: movie?.vote_average,
            year: movie?.release_date && new Date(movie.release_date).getFullYear(),
            image:  movie?.poster_path,
            id: movie?.id
        }
      });


      const state = {
        moviesList: [ ...(page === 1 ? [] : this.props.moviesList), ...(page === this.props.currentSearchPage ? [] : movies?.length ? movies : [])],
        currentSearchPage: page,
        searchQuery,
        totalSearchResultPage: totlaPage
      }

      this.props.setReducer(state);
        }).catch(err => {
          console.log(err);
        })
    }


    fetch = async (page) => { 

        if(page > this.props.totalPage){
            return
        }
     axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${env.apikey}&page=${page}&sort_by=primary_release_date.desc`).then(res => {

    const totlaPage = res.data.total_pages;
      const movies = res.data.results && res.data.results.length && res.data.results.map((movie)  => {
        return {
            title: movie?.original_title,
            description: movie?.overview,
            rating: movie?.vote_average,
            year: movie?.release_date && new Date(movie.release_date).getFullYear(),
            image:  movie?.poster_path,
            id: movie?.id
        }
      });

      const state = {
        moviesList: [...(page === 1 ? [] : this.props.moviesList), ...(page === this.props.currentPage ? [] : movies)],
        totalPage: totlaPage,
        currentPage: page
      }
      this.props.setReducer(state)
    }).catch(er => {
      console.log(er);
    })
    }


    render(){

      const {moviesList} = this.props;
        return (
            <div className='app-container'>
                <Header LeftComponent={Search} RightComponent={(props) => <HomeSharp/> } leftComponentProps={
                  {
                    onSearch: this.makeSearch,
                    currentPage: this.state.currentSearchPage,
                    setState: this.setState
                  }
                } />
                <div className='movie-container'>
                {moviesList.map((movie) => <Card movie={movie} key={movie.name} handleClick={this.handleCardClick} />)}
                </div>
               
            </div>
          )
    }
}


const mapStateToProps = (state) => {

  return {
    ...state
  };
}

const mapDispatchToProps = (dispatch) => {

  return {
    setReducerWithKey: (key, payload) => {
      dispatch(actions.setReducerState({type: key , payload}))
    },

    setReducer: (state) => {
      dispatch(actions.setReducerState(state));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)