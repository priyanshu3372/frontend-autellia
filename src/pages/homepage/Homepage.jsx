import React from 'react'
import './Homepage.css'
import Hero from '../../components/heroSection/Hero.jsx'
import EnterpriceSolutions from '../../components/enterpriceSolutions/EnterpriseSolutions.jsx'
const Homepage = () => {
  return (
    <div>
      <Hero/>
      <EnterpriceSolutions/>
    </div>
  )
}

export default Homepage