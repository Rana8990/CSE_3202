import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Offer from '../components/Offer'
import Products from '../components/Products'
import Slider from '../components/Slider'

const home = () => {
  return (
    <div>
      <Navbar/>
      <Offer/>
      <Slider/>
      <Categories/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default home
