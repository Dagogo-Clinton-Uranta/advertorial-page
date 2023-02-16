import React from 'react'
import './experience.css'
import { AiFillStar } from 'react-icons/ai'
import watch from '../../sleep-assests/image7.png'
import quarrel from '../../sleep-assests/quarrel2.png'
import gained from '../../sleep-assests/gained-weight.png'
import reflect from '../../sleep-assests/reflect2.png'
import inAction from '../../sleep-assests/in-action.png'
import kiss from '../../sleep-assests/kiss2.png'

const Experience = () => {
  return (
    <section id='experience'>
   
   
   <div className="container experience__container ">
   
      <div>

      <h1>Background Story</h1>

      <p>
      My husband David is the perfect husband. I was initially attracted by his manly
       looks and his sparkling sense of humor.

      We’re almost 100% compatible with everything. He likes the same things I like,
       we like the same kinds of food, he’s reliable, kind, and trustworthy. 
      He’s a great Dad to our two kids.

       And we just clicked in bed from our
       first night together! He’s such a cool guy, the man I always dreamed I would marry.
       </p>

      <h1>But our relationship soured when we had to sleep in separate beds!</h1>
     
      <div className="imgPlacer">
      <img src={quarrel}  className="intro__pic" alt="discrodant couple"/>
      </div>

      <p>
      I always believed that married couples should sleep together.
       When we were first married, we always slept in the same bed and 
       our love life was great. He snored sometimes, but not often enough 
       that it really bothered me or kept me awake.But gradually, the snoring got 
       worse and worse, especially after we had our second kid.
      </p>

      <div className="picAndWord">  
      <img src={gained}   alt="beer belly"/>
       
          <p>
              David was spending a lot more time at work, and he was starting to overeat.
             He gained a lot of weight and he started snoring more and more all night. His snoring was TERRIBLE! 
            
          </p>
      </div>

          <p>
            <strong>
           Every night became a battle for me to get to sleep.
             I tossed and turned for hours because my husband snored like a freight train! And it was SO LOUD!
             </strong>
          </p>
   
          <p >
      Even if I managed to fall asleep for a little while,
       the gasping and rasping sounds of my husband’s snoring 
       woke me again and again. It was much worse than when 
       our kids were babies, because if the baby cried, it 
       would only be for a little while and I could go back 
       to sleep. But this loud snoring never stopped! It 
       kept me up almost the whole night!
      </p>


      <div className="picAndWord2">  
      <img src={reflect}   alt="sleep deprived lady"/>
       
          <p>
          Every morning, I’d wake up with puffy eyes and look visibly exhausted all day.
            After months of little to no sleep, I had to finally move to a separate bed 
            in another room. I hated it. I felt like I no longer had any intimacy with my
             husband. But there was nothing else we could do. I had to get some sleep! 
             We had to find a solution to this terrible problem.
            
          </p>
      </div>



      <h1 >We tried Going to a Doctor</h1>

     

      <p>
          
      David and I went to see a sleep specialist. The specialist examined David, 
      and he told us that his loud snoring could point to something more serious. 
      Studies done by the Mayo Clinic show that snoring may be connected to a potentially 
      dangerous condition called “obstructive sleep apnea”.
      <br/>
      <br/>

       Sleep apnea can be a mild problem 
      or potentially become a serious sleep disorder in which breathing repeatedly stops and 
      starts. It's caused when the throat and tongue muscles become relaxed during sleep which
       can cause the airway to become blocked. <strong>The doctor told us that there was even a chance
        he could stop breathing, get a heart attack, or even worse.</strong> “What can I do, doctor?” my
         husband asked.
         <br/>
         <br/>
      Basically, the doctor said if my husband continues down this road he's currently on, his snoring 
      problem can become a very serious health issue. The National Heart, Lung, and Blood Institute
       lists potential treatment options that include tranquilizers to see if that worked, or he could 
       do an operation. There was also a breathing device called a CPAP which was a nose mask that pumped
        oxygen that he would have to wear all night. It looked uncomfortable and unpleasant.
       <strong> We didn’t like the sound of any of this!</strong> 
            
      </p>

      <h1 >But then my friend told me about&nbsp;<span className='ctaPointer3'>Sleep Connection Anti-snore Wristband</span></h1>

      <div className="picAndWord2">  
      <img src={watch}   alt="anti snore band"/>
       
          <p>
          “I can recommend something that has helped me stop snoring and breathe much easier at night.”
           my friend said.
         “It’s called Sleep Connection Anti-Snore Wristband. It’s a little device like a watch that you wear on your wrist.
         It detects when you are snoring and it gives you a tiny electrical impulse on your wrist. This is enough
          to make you shift positions and stop snoring.”
          </p>
      </div>

     <p>“Will it really help?” David asked.</p>
     <br/>

      <p>
      “It has helped me reduce my snoring, so much so that my kids and wife no longer complain about it.
       In fact, one of my other friends told me about it. That’s why I recommend it to anyone that has similar issues!
        It'll gently help you moderate your snoring which happens when you can't move air freely through your nose and throat during sleep.”
        </p>
      
       <br/>
       <p>
       <strong> <span className='ctaPointer3'>Sleep Connection Anti-Snore Wristband</span> is a watch-like device that detects snoring 
        using biosensors</strong> and immediately sends natural electrical pulses to reposition 
        your body and end your snoring.
        </p>


        <div className="imgPlacer">
      <img  style={{marginTop:"3%", marginBottom:"3%", border:"1px solid black"}} src={inAction}  className="intro__pic" alt="sleep band in use"/>
      </div>

      </div>


    <p><strong>Here's what you enjoy</strong></p>

     <p>
     <ul>
   <li>restorative, rejuvenating sleep</li>
   <li>Stop disturbing your partner</li>
   <li>Shift your body for better airflow while sleeping</li>
   <li>Wake up feeling refreshed and energized</li>
   </ul>

     </p>

     <h1>How it works</h1>

<p>
<ol >
  <li style={{marginTop:"1%", marginBottom:"1%"}}> We ordered from the authentic website and it took about a week to arrive.</li>
  <li style={{marginTop:"1%", marginBottom:"1%"}}> Everything we needed was in the package.</li>
  <li style={{marginTop:"1%", marginBottom:"1%"}}>David put the sleep connection <span className="highlight ctaPointer3">anti-snore wristband</span> on, and the very first night, he stopped snoring!</li>
</ol>
</p>

<h1>DAVID’S HORRIBLE SNORING WAS A THING OF THE PAST!</h1>

<p>I moved back into our bedroom right away.</p>

<p>There was no more snoring to keep us apart, and our love life
   became wonderful again! We restored our sense of intimacy and 
   I woke up feeling refreshed and happy every single morning!
  
 </p>
  <br />
 
<p>
<strong><span className='ctaPointer3'>SLEEP CONNECTION ANTI-SNORE WRISTBAND</span> REALLY WORKED.</strong>&nbsp;
 David could barely tell he was wearing it,
  and the snoring was GONE. Just like that.
</p>

<div className="imgPlacer">
      <img src={kiss} style={{marginTop:"3%", marginBottom:"3%" ,width:"90%"}}   alt="happy couple"/>
      </div>

<p>
And best of all, we don’t have to worry about possible health issues any longer. What a gigantic relief that we’re safeguarding my husband’s health!

</p>
<br/>

<p>
It was an amazing invention!
</p>

<p>
You have to act fast, because so many people are discovering and buying <strong><span className='ctaPointer3'>SLEEP CONNECTION ANTI-SNORE WRISTBAND</span></strong> that it’s often out of stock.
</p>
<br/>

<p>
Here’s where to <span className='ctaPointer3'>order</span> right now. 
</p>
<br/>

<p>
<strong>Change your life <span className='ctaPointer3'>NOW</span></strong> and eliminate snoring!
Works on men, women, even kids!&nbsp;
 <strong>100% safe</strong> and very effective! <strong>It’s a miracle device!</strong> 
</p>


<br/>
<br/>

<div className="imgPlacer">
<button className='btn btn-primary'>Shop Now</button>
</div>


<br/>
<br/>

   </div>
  
  





    </section>
  )
}

export default Experience