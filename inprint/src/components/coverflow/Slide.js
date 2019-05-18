import React from 'react'

const Slide = ({path = "publications/issue1"}) => {
  return(
    <div
      className="swiper-slide"
      style={{"backgroundImage" : `url("https://apps.esgplc.com/inprint/${path}/pages/page1.jpg")`}}
    ></div>
  )
}

export default Slide