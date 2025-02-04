import React from 'react'
import Hero from './Hero';
import Spline from '@splinetool/react-spline';

// import Quiz from './quize';





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
           {/* <Quiz/> */}
           {/* <ChatBox/> */}
           {/* <Home2/> */}
           <div>
        <center>
            
              <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 offset-lg-2 my-5'>
                        <p className='lead'>
                        
                        I'm Welcome to All my Users This is a Movie-browser & Learning-Hub to Know All Details About Movies Stories & Learning New Technologys Like Python,JavaScript,Ruby,React Etc..
                         <br/>To Get any Details Search movie Name in Search bar 

    <br/>In Learning-Hub They are Courses Would you Like 👨‍💻Enroll the Cource ! <br/><br/><div style={{color:"blue"}}>Features In Learn-Hub</div><hr/>
    <div style={{color:"green"}}>
    <span>1.Lot Of Courses & FREE Lifetime Access</span><br/>
    <span>2.Coding Mood Available W.r.t Compilers</span><br/>
    <sapn>3.Includes video lectures, quizzes, assignments, coding exercises, and downloadable resources.</sapn><br/>
    <span>4.Learn at your own pace with no deadlines.</span><br/>
    <span>5.Access courses anytime and anywhere through the website or the Udemy app (available on iOS and Android).</span><br/>
    <span>6.Courses are created and taught by industry professionals and subject-matter experts.</span><br/>
    <span>7.Compatible with various devices, including smartphones, tablets, and desktops..</span><br/>
    <span>8.Courses are available in English languages</span><br/>
    <span>9.Every Coure Have Indivisual Hand Written Notes & Road Map For the Course</span><br/>
    <span>10.Download Hand Written Notes , Road-Maps and Other Resourses.</span><br/>
    </div>
    <hr/>
    
                                <div>
                                <p className='lead'>Introduce My Bujji 🤖</p>
                                <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js"></script>
                                <spline-viewer url="https://prod.spline.design/Ed6urtr6EHAOVjYK/scene.splinecode"></spline-viewer>
                                </div>
                        </p>
                    </div>
                </div>
              </div>
              <Spline scene="https://prod.spline.design/Ed6urtr6EHAOVjYK/scene.splinecode" />
        </center>
        
    </div>
      
    </div>
  )
}

export default About
