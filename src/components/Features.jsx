import React from 'react'
import image5 from '../assets/chair5.jpg'

function Features () {
  return (
    <section className="features">
      
    <div className="features-content">
      <h1 className="features-title">
        <span className="light-grey-text">Best </span>
        <span className="dark-grey-text">Features</span>
      </h1>
      <p className="features-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, dolorem! Iste, debitis optio. Cupiditate sint exercitationem numquam repudiandae fugiat ullam omnis quis? Autem accusantium rerum dolorem nesciunt illo architecto quae.
      </p>
      <div className="features-grid-row">
        <div className="features-item">
            <h3>Longevity</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="features-item">
          <h3>Quality</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="features-item">
          <h3>Heritage</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
    <div className="features-image">
      <img src={image5} alt="image5" className="rounded-full" />
    </div>
  </section>
  )
}

export default Features;
