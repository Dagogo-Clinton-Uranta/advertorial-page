import React from 'react'
import './nav.css'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"
import {useState} from 'react'
import testLogo from "../../assets/sleep-logo.png"
import HamburgerMenu from "./HamburgerMenu"
import {isMobile} from 'react-device-detect';

const Nav = () => {
 
  const [activeNav,setActiveNav] = useState('#')

 
  return (

    <nav className=' navContainer'>
      
 
      <button className=' btn-primary' style={{padding:"0.6rem" ,borderRadius:"0.5rem", fontWeight:"600"}}>Shop Now</button>

    </nav>
  )
}

export default Nav