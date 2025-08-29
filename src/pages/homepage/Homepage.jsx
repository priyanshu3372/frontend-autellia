import React from 'react'
import './Homepage.css'
import Hero from '../../components/heroSection/Hero'
import EnterpriceSolutions from '../../components/enterpriceSolutions/EnterpriceSolutions'
const Homepage = () => {
  return (
    <div>
      <Hero/>
      <EnterpriceSolutions/>
    </div>
  )
}

export default Homepage