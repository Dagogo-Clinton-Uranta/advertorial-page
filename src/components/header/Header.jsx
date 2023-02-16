import React from 'react'
import './header.css'
import CTA from './CTA'
import cantSleep from '../../sleep-assests/cant-sleep.png'

import icon from '../../assets/sleep-logo-re.png'
import {AiOutlineArrowDown} from "react-icons/ai"

const Header = () => {
  return (
    <header>
    <div className="container header__container">
      <div className="header__intro__problem">
       <h1 className='headerProblemDesc'>My husband's loud, horrible snoring noise almost caused a divorce!</h1>
      </div>

      <div className="header__intro__pic">
      <img  className="intro__pic" src={cantSleep} alt="snoring man, frowning woman"/>
      {/*<p className='ctaPointer mobileDisp' style={{textAlign:"center",color:"#FFFFFF"}}>Try a Solution <AiOutlineArrowDown/></p>*/}
      </div>
     
     
     


    {/*<div  className="price__tag"><img style={{height:"200px"}} src={salesTag} alt="50% off" /></div>*/}
    
    </div>
   
    {/*<div class="custom-shape-divider-bottom-1675978817">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
  </div>*/}

    </header>
  )
}

export default Header