import React from 'react'
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full'
import Slide from './Slide'

const CoverFlow = (props) => {
  const params = {
    effect: 'coverflow',
    initialSlide: (localStorage.getItem("activeSlide") ? localStorage.getItem("activeSlide") : 0),
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: '.swiper-pagination'
    },
  };

  const attachListeners = (swiper) => {
    if (swiper) {
      swiper.on('slideChange', function(){
        props.updateFunction(swiper.activeIndex)
      });
    }
  }

  return(
    <Swiper getSwiper={attachListeners} {...params}>
    {props.data.map((slide, i) => (
      <Slide key={i} path={slide.path} />
    ))}
    </Swiper>
  )
}

export default CoverFlow