import React from 'react'
import { BrandCarousel, Testimonials, NewArrivals, TopSelling, NewsLetter} from './components'
import Header from '../../layout/Header/Header'

const HomePage = () => {

  return (
    <>
      <Header />
      <BrandCarousel />
      <NewArrivals />
      <TopSelling />
      <Testimonials />
      <NewsLetter />
    </>
  )
}

export default HomePage