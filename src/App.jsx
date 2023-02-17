import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Solution from './components/solution/Solution'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import {isMobile} from 'react-device-detect';


const App = () => {
  return (
    <>
    {/*<Nav/>*/}
    <Header />
    <Experience />
    {/*<About />
    <Solution/>*/}
    {/*<Testimonials />
    <Portfolio/>*/}
    <Footer/>
    
    
    </>
  )
}

export default App