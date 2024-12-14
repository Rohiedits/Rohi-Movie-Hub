import React from 'react';
import Hero from './Hero';
import Spline from '@splinetool/react-spline';

const Home = () => {
  return (
    <div>
        <center>
            <Hero  text="Welcome to Rohi Movie-Browser Homepage 🍿.."/>
              <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 offset-lg-2 my-5'>
                        <p className='lead'>
                        This Is My Homepage <br/>
                        I'm Welcome to All my Users This is a Movie-browser to Know All Details About Movies Stories & IMDB ratings & CAST of movie and More Movie Updates,Etc..
                         <br/>To Get any Details Search movie Name in Search bar 

    <br/>Remember to check them out and enjoy your movie time! <br/>🎬🍿 Enjoy & pandaGo !!!<br/><hr/>
    
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
  )
}

export default Home

