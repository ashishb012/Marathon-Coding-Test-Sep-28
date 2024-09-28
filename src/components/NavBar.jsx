import React from 'react'

function NavBar () {
  return (
    <nav className="navbar">
      <div className="logo">leChair</div>
      <ul>
        <li>Furniture</li>
        <li>Project</li>
        <li>Products</li>
        <li>About Us</li>
      </ul>
      <button className="register-btn">Register</button>
    </nav>
  )
}

export default NavBar;