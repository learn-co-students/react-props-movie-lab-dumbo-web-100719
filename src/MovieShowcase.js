import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {

  return movieData.map((item, index) => (<MovieCard key={index} title={item.title} poster={item.poster} IMDBRating={item.IMDBRating} genres={item.genres} />))

  }


  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
        
      </div>
    )
  }
}


