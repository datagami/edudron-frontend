import React from 'react'
import Header from './Header/Header'

import './assets/css/front_style.css'
import Hero from './Hero'
import Explore_sections from './Explore-sections/Explore_sections'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <div className="hero_bg_img">
        {/* <Header /> */}
        <Hero />
      </div>
      <Explore_sections />

      <Footer />
    </>
  )
}

export default Home
