import React from 'react';
import Card from '../components/movie/Card'
import { API_KEY } from '../service/network'
import placeholder from '../components/img/placeholder.png'

class PopularBattle extends React.Component {

  constructor() {
    super ();

    this.choseFilm = this.choseFilm.bind(this)
  }

    state = {

      currentPage : 1,
      movies : []
  
    } 
  
    componentDidMount() {
      console.log (API_KEY)
      fetch (`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
      .then(res => res.json())
      .then (json => {
        const movies = json.results.map((elem) => {
              return {
                title: elem.title,
                description: elem.overview,
                imgURL : elem.poster_path ? `https://image.tmdb.org/t/p/w300/${elem.poster_path}` : placeholder
              }
        })
        this.setState ({movies})
      })
    }

    choseFilm (ID) {

    }
  
    render() {

      const {
        movies,
        currentPage,
      } = this.state

      const secondIndex = currentPage * 2 - 1
      const firstIndex = secondIndex - 1
  
      const firstMovie = this.state.movies[firstIndex]
      const secondMovie = this.state.movies[secondIndex]
  
      return (
        <div className = 'row'>

          <div className = 'col-6'>
            <button onClick={this.choseFilm}>
              <Card {... firstMovie} />
            </button>
          </div>

          <div className = 'col-6'>
          <button onClick={this.choseFilm}>
              <Card {... secondMovie} />
            </button>
          </div>

        </div>
        
      );
    }
  }

export default PopularBattle;