import React from 'react'
import './about.css'
import quarrel from '../../sleep-assests/quarrel.png'
import gained from '../../sleep-assests/gained-weight.png'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      
      <div className="container about__container">
      
      <img src={quarrel}  className="quarrelImg" alt="discrodant couple"/>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__message'>
         
           
           <small>
              David was spending a lot more time at work, and he was starting to overeat.
             He gained a lot of weight and he started snoring more and more all night. His snoring was TERRIBLE! 
             Every night became a battle for me to get to sleep.
             I tossed and turned for hours because my husband snored like a freight train! And it was SO LOUD!
          </small>
          </article>
         
          <article className='about__card'>
          
           
          <img src={gained} className='about__card__img'  alt="beer belly"/>

          </article>

         

          
        </div>

        
      
      
      
      </div>




      </div>

      
      </section>
  )
}

export default About