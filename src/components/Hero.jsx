import React from 'react'
import chair1 from '../assets/chair1.jpg'

function Hero () {
  return (
    <div>
      <section className="hero" id="hero">
      <div className="hero-text">
        <h1>
          <span className="light-grey-text">The Most </span> <br />
          <span className="dark-grey-text">Comfortable </span> <br />
          <span className="light-grey-text">Chair For You</span> 
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aliquam amet, sequi cum fuga repellendus nostrum ex, laudantium vel nulla animi dignissimos accusantium est sapiente soluta excepturi incidunt atque natus?</p>
        <div>
          <button className="register-btn">Register</button>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={chair1} alt="chair" />
      </div>
    </section>
    </div>
  )
}

export default Hero;