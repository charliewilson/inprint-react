import React from 'react'
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full'
import Slide from './Slide'

const CoverFlow = () => {
  const params = {
    effect: 'coverflow',
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

  const logInstance = (swiper) => {
    console.log(swiper)
  }

  return(
    <Swiper getSwiper={logInstance} {...params}>
      <Slide imageURL="https://placehold.it/620x877?text=Magazine%201" />
      <Slide imageURL="https://placehold.it/620x877?text=Magazine%202" />
      <Slide imageURL="https://placehold.it/620x877?text=Magazine%203" />
      <Slide imageURL="https://placehold.it/620x877?text=Magazine%204" />
    </Swiper>
  )
}

export default CoverFlow