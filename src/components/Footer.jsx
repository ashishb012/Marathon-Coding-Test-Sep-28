import React from 'react'

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-left">
        <h3 className="logo">leChair</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero recusandae provident consequatur et debitis itaque, inventore neque ratione asperiores possimus pariatur nemo nobis ut quos voluptatem, quas velit temporibus. Veniam.</p>
      </div>

    <div className="footer-content">
      
      <div className="footer-column">
        <h4 className="footer-title">About</h4>
        <ul>
          <li>News & Blog</li>
          <li>Features</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4 className="footer-title">Company</h4>
        <ul>
          <li>How We Work?</li>
          <li>Capital</li>
          <li>Security</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4 className="footer-title">Movement</h4>
        <ul>
          <li>About leChair</li>
          <li>Support Us</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4 className="footer-title">Support</h4>
        <ul>
          <li>FAQs</li>
          <li>Support Center</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer;