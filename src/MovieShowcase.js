import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((movie, key) => <MovieCard movie={movie} id={key} />)
    
  }

  render() {
    console.log(this.generateMovieCards())
    return(
      <div id="movie-showcase">
       {this.generateMovieCards()}
      </div>
    )
  }
}

{/* title: 'Choux and Maru go to Istanbul',
  IMDBRating: 3,
    genres: ['cats', 'adventure', 'romance'],
      poster: 'choux-maru-istanbul' */}
