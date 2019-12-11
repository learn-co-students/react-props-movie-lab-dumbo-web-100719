import React, { Component } from 'react';
import MovieCard from './MovieCard';


export default class CardFront extends Component {

  

  render() {
    // console.log(this.props)
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
        {/* {this.generateMoviePoster()} */}
      </div>
    )
  }
}

{/* <div className="card-front" style={{backgroundImage: `url(${''})`}}></div> */}
// {this.props.poster}
