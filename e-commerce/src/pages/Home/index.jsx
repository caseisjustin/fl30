import React from 'react'
import { BrandCarousel, Testimonials, NewArrivals, TopSelling, NewsLetter} from './components'

const HomePage = () => {

  return (
    <>
      
      <BrandCarousel />
      <NewArrivals />
      <TopSelling />
      <Testimonials />
      <NewsLetter />
    </>
  )
}

export default HomePage