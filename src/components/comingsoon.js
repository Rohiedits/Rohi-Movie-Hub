import React from 'react'
import Hero from './Hero';
import Spline from '@splinetool/react-spline';

const comingsoon = () => {
  return (
    <div>
         
        <center>
            <Hero  text="Coming Soon in Rohi-App.."/>
              <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 offset-lg-2 my-5'>
                        <p className='lead'>
                            Iam Bujji design By Rohi....
                        </p>
                        <div>
                                <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js"></script>
                                <spline-viewer url="https://prod.spline.design/Ed6urtr6EHAOVjYK/scene.splinecode"></spline-viewer>
                                </div>
                        
                    </div>
                </div>
              </div>
              <Spline scene="https://prod.spline.design/Ed6urtr6EHAOVjYK/scene.splinecode" />
        </center>
      
      



    </div>
  )
}


export default comingsoon;


