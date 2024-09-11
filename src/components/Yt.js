import React from 'react'
import Hero from './Hero';
//import 'bootstrap/dist/css/bootstrap.main.css';

const Yt = () => {
  return (
    <div>
        <Hero text = " ▶ Youtube Entertainment"/> <br/>
        <div class="ratio ratio-16x9">
        <iframe  src="https://www.youtube.com/embed/7Y5q41D8_hs?si=2IDTA5nMJBlaOmVT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <hr/>
  
</div>
<hr/>
<div class="ratio ratio-16x9">
<iframe src="https://www.youtube.com/embed/y1-w1kUGuz8?si=HyGp04Ra5JMQ0kFI" title="YouTube video" allowfullscreen></iframe>
</div>
<hr/>
        <div class="ratio ratio-16x9">
        <iframe  src="https://www.youtube.com/embed/EqFpIq2Ymo4?si=qoVelg6BD1eu3-sZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
   {/*<iframe width="560" height="315" src="https://www.youtube.com/embed/HNnt00swZ5Q?si=YSWWutXxQgrp0Cby" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    */}
    </div>
  )
}

export default Yt
