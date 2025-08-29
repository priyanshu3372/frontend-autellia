import './Hero.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)


const Hero = () => {
useLayoutEffect(() => {
  const tl = gsap.timeline(
    {
      duration:2,
      scrollTrigger:{
        trigger:".hero-section",
        scrub:true,
        markers:true,
        start:"50% center",
        end:"220% center",
        pin:true
      }
    }
  );
  tl.to(".left-element", { xPercent: -100, duration: 1, opacity:0, ease: "power2.out" },0.45);
  tl.to(".right-element", { xPercent: 100, duration: 1, opacity:0, ease: "power2.out" },0.45);
  tl.from(".c-left-element", { yPercent: 100, duration: 1, ease: "power2.out", opacity:0 },1);
  tl.from(".c-right-element",{ yPercent: 100, duration: 1, ease: "power2.out", opacity:0 },1);
  tl.to(".c-left-element", { xPercent: -100, duration: 1, ease: "power2.out", opacity:0 },2.5);
  tl.to(".c-right-element",{ xPercent: 100, duration: 1, ease: "power2.out", opacity:0 },2.5);
  tl.from(".b-left-element", { yPercent: 100, duration: 1, ease: "power2.out", opacity:0 },3);
  tl.from(".b-right-element",{ yPercent: 100, duration: 1, ease: "power2.out", opacity:0 },3);
  tl.to(".b-left-element", { xPercent: -100, duration: 1, ease: "power2.out", opacity:0 },4.5);
  tl.to(".b-right-element",{ xPercent: 100, duration: 1, ease: "power2.out", opacity:0 },4.5);
}, []);



  return (
    <>
    <div className="hero-section">

      <div className="middle"></div>
      <div className="top">
        <div className="left-element"></div>
        <div className="right-element"></div>
      </div>
      <div className="center">
        <div className="c-left-element"></div>
        <div className="c-right-element"></div>
      </div>
      <div className="bottom">
        <div className="b-left-element"></div>
        <div className="b-right-element"></div>
      </div>
    </div>

      <div className="hero-section2"></div>
    </>
  )
}

export default Hero