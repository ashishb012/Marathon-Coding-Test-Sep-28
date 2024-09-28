import react from 'react'
import './App.css'

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Features from './components/Features'
import WhyChooseUs from './components/WhyChooseUs'
import Categories from './components/Categories'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <WhyChooseUs />
      <Categories />
      <Footer />
    </>
  )
}

export default App
