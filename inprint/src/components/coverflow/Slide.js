import React from 'react'

const Slide = ({imageURL = "https://placehold.it/620x877"}) => (
  <div
    className="swiper-slide"
    style={{"backgroundImage" : `url(${imageURL})`}}
  ></div>
)

export default Slide