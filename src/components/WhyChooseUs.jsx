import React from 'react'
import image5 from '../assets/chair5.jpg'

function WhyChooseUs () {
  return (
    <section className="features">
      <div className="features-image">
      <img src={image5} alt="image5" className="rounded-full" />
    </div>
    <div className="features-content">
      <h2 className="features-title">
        <span className="light-grey-text">Why Choose </span>
        <span className="dark-grey-text">Us?</span>
      </h2>
      <p className="features-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, dolorem! Iste, debitis optio. Cupiditate sint exercitationem numquam repudiandae fugiat ullam omnis quis? Autem accusantium rerum dolorem nesciunt illo architecto quae.
      </p>
      <div className="features-grid">
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
        <div className="features-item">
          <h3>Comfort</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
    
  </section>
  )
}

export default WhyChooseUs;
