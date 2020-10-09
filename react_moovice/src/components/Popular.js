import React from 'react';
import Card from './movie/Card'

class Popular extends React.Component {

    constructor() {
        super();
    
        this.state = {
          movies: [],
          image : [],
          titre : '',
          description : ''
      }
    }
  
    
      componentDidMount() {
    
        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e')
          .then(res => res.json())
          .then(json => {
            this.setState({
              movies: json.results,
              image : json.results[0].poster_path,
              titre : json.results.original_title,
              description : json.results[0].overview
            })
          }).catch(err => console.error(err));
    
      }


  render() {
    return (
      <div>Popular

      </div>
      
    );
  }
}
export default Popular;