import React from 'react'
import './EnterpriseSolutions.css'
import { useLayoutEffect } from 'react'
import enterpriseBanner from '/assets/images/enterpriseBanner.svg'  
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aiImage from '/assets/images/ai.png'
import Card from '../card/Card.jsx'
gsap.registerPlugin(ScrollTrigger);

const EnterpriseSolutions = () => {

  useLayoutEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.card-track',
        markers:true,
        start:"top bottom",
        end:"bottom bottom",
        scrub:1,
        pin:".enterprise-banner-wrapper",
        pinSpacing:false,
      }
    })
    tl.to(".enterprise-banner",{scale:0,duration:1,ease:"power3.out",opacity:0,},0.1);
    tl.from(".ai-image",{scale:0,duration:1,ease:"power3.out",opacity:0},0.5);
    tl.to(".one-l",{xPercent:-100,ease:"power3.out",opacity:0},1.5);
    tl.to(".one-r",{xPercent:100,ease:"power3.out",opacity:0},1.5);
    tl.to(".two-l",{xPercent:-100,ease:"power3.out",opacity:0},3.3);
    tl.to(".two-r",{xPercent:100,ease:"power3.out",opacity:0},3.3);
    tl.to(".three-l",{xPercent:-100,ease:"power3.out",opacity:0},5);
    tl.to(".three-r",{xPercent:100,ease:"power3.out",opacity:0},5);
  },[])


  return (
    <div className="enterprise-container">
    <div className="enterprise-banner-wrapper">
      {/* ai image */}
      <div className="ai-image">
        <img src={aiImage} alt="ai-img" />
      </div>

      {/* banner image */}
      <div className="enterprise-banner" style={{backgroundImage:`url(${enterpriseBanner})`,
      backgroundSize:"cover",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat"
      }}>
        
        <div className="top-label">Automation at Scale</div>
        <h1 className="heading-line-one">Streamline every </h1>
        <h1 className="heading-line-two">function, at enterprise speed</h1>
        <p>Autellia empowers enterprises to automate faster, reduce costs, and accelerate transformation across the business.</p>
        <button>Discover Enterprise Suite</button>
      </div>

    </div>

      <div className="animated-card-scroll">
        <div className="card-track">

          {/* left track cards */}
          <div className="card-scroll-track-left">
              <Card className="one-l"/>
              <Card className="two-l"/>
              <Card className="three-l"/>      
          </div>

          {/* right track cards */}
          <div className="card-scroll-track-right">
              <Card className="one-r"/>
              <Card className="two-r"/>
              <Card className="three-r"/>        
          </div>
        </div>
    </div>
    </div>
  )
}

export default EnterpriseSolutions