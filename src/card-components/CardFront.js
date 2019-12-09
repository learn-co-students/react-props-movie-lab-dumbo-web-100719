import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    // const {moviePoster} = this.props
    // console.log(moviePoster)
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
