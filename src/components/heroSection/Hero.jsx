import './Hero.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import { ArrowRightIcon } from 'lucide-react'
gsap.registerPlugin(ScrollTrigger)


const Hero = () => {
  return (
    <>
    <div className="hero-container">
       <div className="hero-main-container">
        <div className="hero-main-layout">
           <div className="hero-main-eyebrow">
              <span className="new-span">New!</span>
              <p className="eyebrow-para">
                Autellia helps companies work smarter with Intelligent Automation
              </p>
              <span className="arrow-icon">
                <ArrowRightIcon size={16} />
              </span>
           </div>

           <h1 className="hero-main-heading">AI & Automation built for businesses</h1>
           <p className="hero-main-para">At Autellia, we help businesses work smarter through Intelligent Automation, AI, and process innovation. We deliver tailored solutions that streamline operations, cut costs, and accelerate growth.</p>

           <div className="buttons">
             <div className="start-free-trial">Start Your Automation Journey</div>
             <div className="get-a-demo">Talk to an Expert</div>
           </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default Hero
