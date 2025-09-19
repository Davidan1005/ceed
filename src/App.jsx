import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './header.jsx'
import Hero from './Hero.jsx'
import Samples from './samples.jsx'
import About from './about.jsx'
import Contact from './contact.jsx'
import Footer from './footer.jsx'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Samples />
      <About />
      <Contact />
      <Footer />
      
      
    </>
  )
}

export default App
