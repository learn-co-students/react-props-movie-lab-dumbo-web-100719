import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'


export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX

    return movieData.map((data, index) => <MovieCard 

      key={ index }
      title={data.title} 
      IMDBRating={data.IMDBRating} 
      genres={data.genres}
      poster={data.poster}
      />
      // console.log(data)
      // console.log(<MovieCard/>)
    
    )


    // return movieData.map((data) => <li>{ <MovieCard title={data.title} IMDBRating={data.IMDBRating} poster={data.poster} genres={data.genres}/> }</li>)
    
  }
  // <MovieCard title={data.title}/>

  render() {
    
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
        
      </div>
    )
  }
}

