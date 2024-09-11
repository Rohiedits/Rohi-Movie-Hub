import React from 'react'
import Hero from './Hero';

const About = () => {
  return (
    <div>
        <Hero text = "👨‍💻About Us"/>
          <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 offset-lg-2 my-5'>
                        <p className='lead'>
                            I'm <div style={{color:"green"}}>Rohit</div> Developer of this Project 👨‍💻 <br/>
                        
                            I'm not a designer but I have a good sense of aesthetics, and experience in responsive, mobile-first web design. I put special effort into optimizing my code and providing the best user experience. I would love to give you any kind of support also after the project's completion. I guarantee a commitment during work on your project.
                            <br/>
                            <div style={{color:"red"}}>© All Copyrights Clims Belongs to Rohith Bhojanapu ..</div>
                             
                 
                 
                        </p>
                    </div>    
                </div>        
           </div> 
                           
      
    </div>
  )
}

export default About
