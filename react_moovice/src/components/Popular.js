import React from 'react';
import Card from './movie/Card'
import { API_KEY } from '../service/network'
import placeholder from '../components/img/placeholder.png'

class Popular extends React.Component {

  state = {
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

  render() {

    const {
        movies
    } = this.state

    return (
      <div className = 'row'>
        {movies.map ((elem, index) => {
          
          return ( <div className = 'col-6'>
                    <Card key = {index} title = {elem.title} description= {elem.description} imgURL = {elem.imgURL} />
                </div> )

          })}
      </div>
      
    );
  }
}
export default Popular;