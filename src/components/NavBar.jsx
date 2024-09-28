import React from 'react'

function NavBar () {
  return (
    <nav className="navbar">
      <div className="logo">leChair</div>
      <ul>
        <li>
          <a href="#categories">Categories</a>
        </li>
        <li>
          <a href="#why-choose-us">Why Choose Us?</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li> 
          <a href="#footer">About Us</a> 
        </li>
      </ul>
      <button className="register-btn">Register</button>
    </nav>
  )
}

export default NavBar;