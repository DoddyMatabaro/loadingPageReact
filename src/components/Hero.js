import React from 'react';
import './Hero.css';

function Hero({imgSrc}) {
  return (
    <div className='hero'>
        <img src={imgSrc} alt="Family" className="hero_image"/>
        <h1 className='hero_title'>Action Juwa ASBL </h1>
    </div>
  )
}

export default Hero