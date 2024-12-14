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
                            ComingSoon....
                        </p>
                        <Spline scene="https://prod.spline.design/Ed6urtr6EHAOVjYK/scene.splinecode" />
                    </div>
                </div>
              </div>
        </center>
      
      



    </div>
  )
}


export default comingsoon;


