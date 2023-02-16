import React from 'react'
import './solution.css'
import quarrel from '../../sleep-assests/quarrel.png'
import gained from '../../sleep-assests/gained-weight.png'
import reflect from '../../sleep-assests/reflect2.png'
import inAction from '../../sleep-assests/in-action.png'
import image7 from '../../sleep-assests/image7.png'
import kiss from '../../sleep-assests/kiss.png'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineArrowDown} from "react-icons/ai"
import {VscFolderLibrary} from 'react-icons/vsc'


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { fontSize } from '@mui/system'

const Solution = () => {
  return (
    <section id='solution'>
      
      <div className="container solution__container">
      
      <p className='solution__message'>
      Even if I managed to fall asleep for a little while,
       the gasping and rasping sounds of my husband’s snoring 
       woke me again and again. It was much worse than when 
       our kids were babies, because if the baby cried, it 
       would only be for a little while and I could go back 
       to sleep. But this loud snoring never stopped! It 
       kept me up almost the whole night!
      </p>

      <div className="solution__content">
        <div className="solution__cards">

        <article className='solution__card'>
          
           
          <img src={reflect} className='solution__card__img'  alt="a woman thinking"/>

          </article>

          <article className='solution__message'>
         
           
           <small>
            <strong>
           Every morning, I’d wake up with puffy eyes and look visibly exhausted all day.
            After months of little to no sleep, I had to finally move to a separate bed 
            in another room. I hated it. I felt like I no longer had any intimacy with my
             husband. But there was nothing else we could do. I had to get some sleep! 
             We had to find a solution to this terrible problem.
             </strong>

             <div className='ctaPointer2'>Try a Solution <AiOutlineArrowDown/></div>
          </small>

          
          </article>
         
          

         

          
        </div>
      
      </div>
   
      <h2 className="solution__title" >We tried Going to a Doctor</h2>
      <span className="solution__message">

      <Accordion sx={{position:"relative",boxShadow: "-1px 12px 10px -10px rgba(0,0,0,0.87)"}}>
        <AccordionSummary
        
          expandIcon={<ExpandMoreIcon sx={{marginLeft:"10px",fontSize:"2rem"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          David and I went to see a sleep specialist. The specialist examined David, 
      and he told us that his loud snoring could point to something more serious. 
      Studies done by the Mayo Clinic show that ...
        </AccordionSummary>
        <AccordionDetails>
        snoring may be connected to a potentially 
      dangerous condition called “obstructive sleep apnea”. Sleep apnea can be a mild problem 
      or potentially become a serious sleep disorder in which breathing repeatedly stops and 
      starts. It's caused when the throat and tongue muscles become relaxed during sleep which
       can cause the airway to become blocked. The doctor told us that there was even a chance
        he could stop breathing, get a heart attack, or even worse. “What can I do, doctor?” my
         husband asked.
      Basically, the doctor said if my husband continues down this road he's currently on, his snoring 
      problem can become a very serious health issue. The National Heart, Lung, and Blood Institute
       lists potential treatment options that include tranquilizers to see if that worked, or he could 
       do an operation. There was also a breathing device called a CPAP which was a nose mask that pumped
        oxygen that he would have to wear all night. It looked uncomfortable and unpleasant.
         We didn’t like the sound of any of this!
        </AccordionDetails>
      </Accordion>


      </span>

      <h2 className="solution__title" >Finally a Solution: <span className='ctaPointer3'>Sleep Connection Anti-snore Wristband</span></h2>


      <div className="solution__cards">

        <article className='solution__card'>
          
           
          <img src={image7} className='solution__card__img'  alt="a woman thinking"/>

          </article>

          <article className='solution__card'>
          
           
          <img src={inAction} className='solution__card__img'  alt="a woman thinking"/>

          </article>
          
        </div>

        <div className='solution__message'>
          Sleep Connection Anti-Snore Wristband is a watch-like device that detects snoring
          using biosensors and immediately sends natural electrical pulses to reposition 
          your body and end your snoring.
        </div> 

        <div className='solution__message'><strong>Here’s what you enjoy: </strong></div>
<ul className='solution__message'>
<li>restorative, rejuvenating sleep</li>
<li>Stop disturbing your partner</li>
<li>Shift your body for better airflow while sleeping</li>
<li>Wake up feeling refreshed and energized</li>
</ul>



  <div className='how-it solution__message'>
    <h2>How it works</h2>

    <ol>
      <li> We ordered from the authentic website and it took about a week to arrive.</li>
      <li> We ordered from the authentic website and it took about a week to arrive.</li>
      <li>David put the sleep connection <span className="highlight ctaPointer3">anti-snore wristband</span> on, and the very first night, he stopped snoring!</li>
    </ol>

   <img src={kiss} alt= "happy sleeping couple"></img>

   <button className='btn '>Order Now</button>

  </div>




      </div>

      
      </section>
  )
}

export default Solution