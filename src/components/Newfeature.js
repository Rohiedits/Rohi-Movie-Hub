import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import Nav from 'react-bootstrap/Nav';
const Card = () => {
  return (
    <StyledWrapper>
             <Hero  text="👨‍💻Learning Hub.."/>
             
      <div className="card">
 
        <svg className="App-logo" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454c.771 0 1.395.624 1.395 1.395s-.624 1.395-1.395 1.395a1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z" fill="url(#a)" /><path d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395c0-.77.624-1.394 1.395-1.394s1.395.623 1.395 1.394c0 .772-.624 1.395-1.395 1.395z" fill="url(#b)" /><defs><linearGradient id="a" x1="19.075" y1="18.782" x2="34.898" y2="34.658" gradientUnits="userSpaceOnUse"><stop stopColor="#387EB8" /><stop offset={1} stopColor="#366994" /></linearGradient><linearGradient id="b" x1="28.809" y1="28.882" x2="45.803" y2="45.163" gradientUnits="userSpaceOnUse"><stop stopColor="#FFE052" /><stop offset={1} stopColor="#FFC331" /></linearGradient></defs></svg>
        <div className="header"><center><span className="welcometo">Welcome to</span> <br /> <span className="python">Python</span></center></div>
        <Nav.Link href="/Python" className="App-button">Start learning now</Nav.Link>
      </div>
      <hr/>
      <div className="card2">
        <svg xmlSpace="preserve" viewBox="0 0 306 344.35" y="0px" x="0px" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" className="App-logo2">
          <path d="M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175
      	L302.107,258.262z" fill="#00599C" />
          <path d="M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263
      	c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z" fill="#004482" />
          <path d="M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0
      	L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z" fill="#659AD2" />
          <g>
            <path d="M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968
      		l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51
      		c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z" fill="#131c25" />
          </g>
          <g>
            <polygon points="255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508 
      		221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841" fill="#131c25" />
          </g>
          <g>
            <polygon points="297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508 
      		263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841" fill="#131c25" />
          </g>
        </svg>
        <div className="header2">Welcome to C++</div>
        {/* <button className="App-button2">Start learning now</button> */}
        <Nav.Link href="/Cpp" className="App-button2">Start learning now</Nav.Link>
      </div>
      <hr />
      <div className="card3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="App-logo3">
          <path fill="url(#paint0_linear_87_8208)" d="M22.5941 19.8407L8.8916 27.9998L26.6338 26.7925L28.0003 8.85254L22.5941 19.8407Z" clipRule="evenodd" fillRule="evenodd" />
          <path fill="url(#paint1_linear_87_8208)" d="M26.6631 26.7806L25.1381 16.2261L20.9844 21.7262L26.6631 26.7806Z" clipRule="evenodd" fillRule="evenodd" />
          <path fill="url(#paint2_linear_87_8208)" d="M26.6836 26.7803L15.5117 25.9009L8.95117 27.9769L26.6836 26.7803Z" clipRule="evenodd" fillRule="evenodd" />
          <path fill="url(#paint3_linear_87_8208)" d="M8.96674 27.9796L11.7576 18.811L5.61621 20.1279L8.96674 27.9796Z" clipRule="evenodd" fillRule="evenodd" />
          <path fill="url(#paint4_linear_87_8208)" d="M27.4176 11.8117L20.4706 6.12207L18.5361 12.3936L27.4176 11.8117Z" clipRule="evenodd" fillRule="evenodd" />
          <path fill="url(#paint5_linear_87_8208)" d="M24.1684 4.09336L20.0826 6.35755L17.5049 4.06299L24.1684 4.09336Z" clipRule="evenodd" fillRule="evenodd" />
          <path fill="url(#paint6_linear_87_8208)" d="M4 23.2031L5.7116 20.0729L4.32706 16.3438L4 23.2031Z" clipRule="evenodd" fillRule="evenodd" />
          <path fill="white" d="M4.23535 16.2259L5.62838 20.1883L11.6814 18.8265L18.592 12.3862L20.5422 6.17431L17.4714 4L12.2506 5.95931C10.6057 7.49347 7.41387 10.529 7.29879 10.5861C7.18493 10.6444 5.19109 14.4233 4.23535 16.2259Z" clipRule="evenodd" fillRule="evenodd" />
          <path fill="url(#paint7_linear_87_8208)" d="M11.7227 18.7882L18.592 12.3863L18.5951 12.3765L20.9832 21.7566L11.7227 18.7882Z" />
          <path fill="url(#paint8_linear_87_8208)" d="M9.12619 9.10774C12.6911 5.56325 17.2869 3.46911 19.0506 5.2535C20.8132 7.03789 18.944 11.3744 15.3791 14.9176C11.8141 18.4609 7.27528 20.6705 5.5128 18.8861C3.74911 17.1029 5.56126 12.651 9.12619 9.10774Z" clipRule="evenodd" fillRule="evenodd" />
          <path fill="url(#paint9_linear_87_8208)" d="M8.9668 27.9755L11.7359 18.7778L20.9323 21.7405C17.6072 24.8671 13.909 27.5103 8.9668 27.9755Z" clipRule="evenodd" fillRule="evenodd" />
          <path fill="url(#paint10_linear_87_8208)" d="M18.6035 12.3679L20.9644 21.7454C23.742 18.8167 26.2349 15.6682 27.4558 11.7739L18.6035 12.3679Z" clipRule="evenodd" fillRule="evenodd" />
          <path fill="url(#paint11_linear_87_8208)" d="M27.4317 11.8217C28.3765 8.96229 28.5945 4.86025 24.1392 4.09863L20.4834 6.12354L27.4317 11.8217Z" clipRule="evenodd" fillRule="evenodd" />
          <path fill="#9E1209" d="M4 23.162C4.13082 27.8812 7.52617 27.9515 8.97249 27.9929L5.63166 20.1689L4 23.162Z" clipRule="evenodd" fillRule="evenodd" />
          <path fill="url(#paint12_radial_87_8208)" d="M18.6172 12.3826C20.7515 13.6981 25.0531 16.3401 25.1403 16.3887C25.2758 16.4652 26.9948 13.4819 27.3849 11.7959L18.6172 12.3826Z" clipRule="evenodd" fillRule="evenodd" />
          <path fill="url(#paint13_radial_87_8208)" d="M11.7324 18.7778L15.4342 25.9397C17.6231 24.7493 19.3371 23.2989 20.907 21.7453L11.7324 18.7778Z" clipRule="evenodd" fillRule="evenodd" />
          <path fill="url(#paint14_linear_87_8208)" d="M5.61728 20.1783L5.09277 26.4413C6.08243 27.7969 7.44396 27.9147 8.87211 27.8091C7.83885 25.2303 5.77475 20.0739 5.61728 20.1783Z" clipRule="evenodd" fillRule="evenodd" />
          <path fill="url(#paint15_linear_87_8208)" d="M20.4619 6.1393L27.8159 7.17422C27.4234 5.50644 26.2181 4.43022 24.1637 4.09375L20.4619 6.1393Z" clipRule="evenodd" fillRule="evenodd" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" y2="21.2307" x2="20.0019" y1="30.1825" x1="25.0863" id="paint0_linear_87_8208">
              <stop stopColor="#FB7655" />
              <stop stopColor="#E42B1E" offset="0.41" />
              <stop stopColor="#990000" offset="0.99" />
              <stop stopColor="#990000" offset={1} />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="18.2786" x2="21.0723" y1="22.6528" x1="27.6086" id="paint1_linear_87_8208">
              <stop stopColor="#871101" />
              <stop stopColor="#911209" offset="0.99" />
              <stop stopColor="#911209" offset={1} />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="26.0802" x2="15.8517" y1="30.4542" x1="22.3878" id="paint2_linear_87_8208">
              <stop stopColor="#871101" />
              <stop stopColor="#911209" offset="0.99" />
              <stop stopColor="#911209" offset={1} />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="26.0657" x2="9.70472" y1="19.4743" x1="8.68769" id="paint3_linear_87_8208">
              <stop stopColor="white" />
              <stop stopColor="#E57252" offset="0.23" />
              <stop stopColor="#DE3B20" offset="0.46" />
              <stop stopColor="#A60003" offset="0.99" />
              <stop stopColor="#A60003" offset={1} />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="11.9204" x2="22.9409" y1="7.10002" x1="21.8192" id="paint4_linear_87_8208">
              <stop stopColor="white" />
              <stop stopColor="#E46342" offset="0.18" />
              <stop stopColor="#C82410" offset="0.4" />
              <stop stopColor="#A80D00" offset="0.99" />
              <stop stopColor="#A80D00" offset={1} />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="3.00175" x2="23.2251" y1="5.40177" x1="18.4117" id="paint5_linear_87_8208">
              <stop stopColor="white" />
              <stop stopColor="#C81F11" offset="0.54" />
              <stop stopColor="#BF0905" offset="0.99" />
              <stop stopColor="#BF0905" offset={1} />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="21.7663" x2="4.87073" y1="17.7935" x1="4.47282" id="paint6_linear_87_8208">
              <stop stopColor="white" />
              <stop stopColor="#DE4024" offset="0.31" />
              <stop stopColor="#BF190B" offset="0.99" />
              <stop stopColor="#BF190B" offset={1} />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="20.0464" x2="16.02" y1="13.3187" x1="15.6452" id="paint7_linear_87_8208">
              <stop stopColor="white" />
              <stop stopColor="#E4714E" offset="0.23" />
              <stop stopColor="#BE1A0D" offset="0.56" />
              <stop stopColor="#A80D00" offset="0.99" />
              <stop stopColor="#A80D00" offset={1} />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="3.71053" x2="20.4078" y1="22.8404" x1="1.75216" id="paint8_linear_87_8208">
              <stop stopColor="#BD0012" />
              <stop stopColor="white" offset="0.07" />
              <stop stopColor="white" offset="0.17" />
              <stop stopColor="#C82F1C" offset="0.27" />
              <stop stopColor="#820C01" offset="0.33" />
              <stop stopColor="#A31601" offset="0.46" />
              <stop stopColor="#B31301" offset="0.72" />
              <stop stopColor="#E82609" offset="0.99" />
              <stop stopColor="#E82609" offset={1} />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="23.3957" x2="10.3965" y1="24.7752" x1="16.0015" id="paint9_linear_87_8208">
              <stop stopColor="#8C0C01" />
              <stop stopColor="#990C00" offset="0.54" />
              <stop stopColor="#A80D0E" offset="0.99" />
              <stop stopColor="#A80D0E" offset={1} />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="13.5714" x2="20.635" y1="18.0314" x1="25.6251" id="paint10_linear_87_8208">
              <stop stopColor="#7E110B" />
              <stop stopColor="#9E0C00" offset="0.99" />
              <stop stopColor="#9E0C00" offset={1} />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="7.17189" x2="24.9671" y1="9.82314" x1="27.4539" id="paint11_linear_87_8208">
              <stop stopColor="#79130D" />
              <stop stopColor="#9E120B" offset="0.99" />
              <stop stopColor="#9E120B" offset={1} />
            </linearGradient>
            <radialGradient gradientTransform="translate(21.4229 13.6432) scale(6.09995 6.11692)" gradientUnits="userSpaceOnUse" r={1} cy={0} cx={0} id="paint12_radial_87_8208">
              <stop stopColor="#A80D00" />
              <stop stopColor="#7E0E08" offset="0.99" />
              <stop stopColor="#7E0E08" offset={1} />
            </radialGradient>
            <radialGradient gradientTransform="translate(12.9755 21.7042) scale(8.10906 8.13164)" gradientUnits="userSpaceOnUse" r={1} cy={0} cx={0} id="paint13_radial_87_8208">
              <stop stopColor="#A30C00" />
              <stop stopColor="#800E08" offset="0.99" />
              <stop stopColor="#800E08" offset={1} />
            </radialGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="21.0987" x2="5.19975" y1="27.9701" x1="7.23075" id="paint14_linear_87_8208">
              <stop stopColor="#8B2114" />
              <stop stopColor="#9E100A" offset="0.43" />
              <stop stopColor="#B3100C" offset="0.99" />
              <stop stopColor="#B3100C" offset={1} />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="7.18628" x2="27.2663" y1="5.19037" x1="22.7321" id="paint15_linear_87_8208">
              <stop stopColor="#B31000" />
              <stop stopColor="#910F08" offset="0.44" />
              <stop stopColor="#791C12" offset="0.99" />
              <stop stopColor="#791C12" offset={1} />
            </linearGradient>
          </defs>
        </svg>
        <div className="header3">Welcome to Ruby</div>
        {/* <button className="App-button3">Start learning now</button> */}
        <Nav.Link href="/Ruby" className="App-button3">Start learning now</Nav.Link>
      </div>
      <hr/>
      <div className="card4">
        <svg className="App-logo4" xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" viewBox="0 0 512 512">
          <rect width={512} height={512} rx="15%" fill="#f7df1e" />
          <path fill="#25241c" d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" />
        </svg>
        <div className="header4">
          <center>Welcome to<br /> JavaScript</center>
        </div>
        {/* <button className="App-button4">Start learning now</button> */}
        <Nav.Link href="/Javascriptcourse" className="App-button4">Start learning now</Nav.Link>
      </div>
      <hr/>
    <div className="card5">
            <svg className="App-logo5" viewBox="0 0 841.9 595.3" xmlns="http://www.w3.org/2000/svg"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" /><circle r="45.7" cy="296.5" cx="420.9" /><path d="M520.5 78.1z" /></g></svg>
            <div className="header5">Welcome to React</div>
            {/* <button className="App-button5">Start learning now</button> */}
            <Nav.Link href="/Reactjscourse" className="App-button5">Start learning now</Nav.Link>
            
          </div>
          <hr/>
          <div className="card6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={120} className="App-logo6">
          <g strokeWidth={0} id="SVGRepo_bgCarrier" />
          <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" />
          <g id="SVGRepo_iconCarrier">
            <path strokeWidth="1.5" stroke="#cbe6ff" d="M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12" />
            <path strokeWidth="1.5" stroke="#cbe6ff" d="M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6" />
            <path strokeWidth="1.5" stroke="#cbe6ff" d="M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z" />
          </g>
        </svg>
        <div className="header6">Welcome to SQL</div>
        {/* <button href='/Sqlcourse' className="App-button6">Start learning now</button> */}
        <Nav.Link href="/Sqlcourse" className="App-button6">Start learning now</Nav.Link>
      </div>
      
 
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card2 {
    background-color: #131c25;
    border: 3px solid #659AD2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 30px 20px;
    color: #659AD2;
    border-radius: 45px;
  }

  .App-logo2 {
    pointer-events: none;
    width: 140px;
    margin-bottom: 20px;
  }

  .App-button2 {
    padding: 10px 20px;
    background-color: transparent;
    color: #659AD2;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    border: 3px solid #659AD2;
    border-radius: 5em;
    margin-top: 20px;
    transition: 0.2s;
  }

  .App-button2:hover {
    color: #282c34;
    background-color: #659AD2;
  };

  .card {
    background-color: #191e24;
    border: 3px solid #387EB8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 25px 5px;
    color: white;
    border-radius: 45px;
    margin-top: 20px;
  }

  .App-logo {
    pointer-events: none;
    margin-top: -40px;
    margin-bottom: -40px;
    width: 250px;
  }

  .App-button {
    padding: 10px 20px;
    background-color: transparent;
    color: #FFE052;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    border: 3px solid #FFE052;
    border-radius: 5em;
    margin-top: 20px;
    transition: 0.2s;
  }

  .App-button:hover {
    color: #191e24;
    background-color: #FFE052;
  }

  .welcometo {
    color: #387EB8;
  }

  .python {
    color: #FFE052;
  };
    .card3 {
        background-color: #2e1513;
        border: 3px solid #E42B1E;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        font-weight: 700;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 30px 20px;
        color: #e23c30;
        border-radius: 45px;
      }
    
      .App-logo3 {
        pointer-events: none;
        margin-top: -10px;
        width: 160px;
      }
    
      .App-button3 {
        padding: 10px 20px;
        background-color: transparent;
        color: #E42B1E;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 15px;
        border: 3px solid #E42B1E;
        border-radius: 5em;
        margin-top: 20px;
        transition: 0.2s;
      }
    
      .App-button3:hover {
        color: #2e1513;
        background-color: #E42B1E;
      };
        .card4 {
            background-color: #25241c;
            border: 3px solid #f7df1e;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 26px;
            font-weight: 700;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            padding: 30px 40px;
            color: #f7df1e;
            border-radius: 45px;
          }
        
          .App-logo4 {
            pointer-events: none;
            width: 110px;
            margin-bottom: 20px;
          }
        
          .App-button4 {
            padding: 10px 20px;
            background-color: transparent;
            color: #f7df1e;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 15px;
            border: 3px solid #f7df1e;
            border-radius: 5em;
            margin-top: 20px;
            transition: 0.2s;
          }
        
          .App-button4:hover {
            color: #2e2d23;
            background-color: #f7df1e;
          };
          .card5 {
    background-color: #1e2127;
    border: 3px solid #61dafb;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 30px 40px;
    color: #61dafb;
    border-radius: 45px;
  }

  .App-logo5 {
    pointer-events: none;
            width: 160px;
            margin-bottom: 20px;
  }

  .App-button5 {
    padding: 10px 20px;
    background-color: transparent;
    color: #61dafb;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    border: 3px solid #61dafb;
    border-radius: 5em;
    margin-top: 20px;
    transition: 0.2s;
  }

  .App-button5:hover {
    color: #1e2127;
    background-color: #61dafb;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo5 {
      animation: App-logo-spin infinite 5s linear;
    }
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  };
  .card6 {
    background-color: #1f1e27;
    border: 3px solid #cbe6ff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    padding: 30px 20px;
    color: #cbe6ff;
    border-radius: 45px;
  }

  .App-logo6 {
    pointer-events: none;
    margin-top: -10px;
  }

  .App-button6 {
    padding: 10px 20px;
    background-color: transparent;
    color: #cbe6ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 15px;
    border: 3px solid #cbe6ff;
    border-radius: 5em;
    margin-top: 20px;
    transition: 0.2s;
    cursor: pointer;
  }

  .App-button6:hover {
    color: #1e2127;
    background-color: #cbe6ff;
  }
  @media (prefers-reduced-motion: no-preference) {
    .card:hover  .App-logo {
      -webkit-animation: wobble-hor-bottom 0.9s ease-in both;
      animation: wobble-hor-bottom 0.9s ease-in both;
    }
  @media (prefers-reduced-motion: no-preference) {
    .card2:hover  .App-logo2 {
      -webkit-animation: wobble-hor-bottom 0.9s ease-in both;
      animation: wobble-hor-bottom 0.9s ease-in both;
    }
    @media (prefers-reduced-motion: no-preference) {
    .card3:hover  .App-logo3 {
      -webkit-animation: wobble-hor-bottom 0.9s ease-in both;
      animation: wobble-hor-bottom 0.9s ease-in both;
    }
    @media (prefers-reduced-motion: no-preference) {
    .card4:hover  .App-logo4 {
      -webkit-animation: wobble-hor-bottom 0.9s ease-in both;
      animation: wobble-hor-bottom 0.9s ease-in both;
    }

  @media (prefers-reduced-motion: no-preference) {
    .card6:hover  .App-logo6 {
      -webkit-animation: wobble-hor-bottom 0.9s ease-in both;
      animation: wobble-hor-bottom 0.9s ease-in both;
    }
  }

  

  /**
   * ----------------------------------------
   * animation wobble-hor-bottom
   * ----------------------------------------
   */
  @-webkit-keyframes wobble-hor-bottom {
    0%,
    100% {
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
    15% {
      -webkit-transform: translateX(-30px) rotate(-6deg);
      transform: translateX(-30px) rotate(-6deg);
    }
    30% {
      -webkit-transform: translateX(15px) rotate(6deg);
      transform: translateX(15px) rotate(6deg);
    }
    45% {
      -webkit-transform: translateX(-15px) rotate(-3.6deg);
      transform: translateX(-15px) rotate(-3.6deg);
    }
    60% {
      -webkit-transform: translateX(9px) rotate(2.4deg);
      transform: translateX(9px) rotate(2.4deg);
    }
    75% {
      -webkit-transform: translateX(-6px) rotate(-1.2deg);
      transform: translateX(-6px) rotate(-1.2deg);
    }
  }
  @keyframes wobble-hor-bottom {
    0%,
    100% {
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
    15% {
      -webkit-transform: translateX(-30px) rotate(-6deg);
      transform: translateX(-30px) rotate(-6deg);
    }
    30% {
      -webkit-transform: translateX(15px) rotate(6deg);
      transform: translateX(15px) rotate(6deg);
    }
    45% {
      -webkit-transform: translateX(-15px) rotate(-3.6deg);
      transform: translateX(-15px) rotate(-3.6deg);
    }
    60% {
      -webkit-transform: translateX(9px) rotate(2.4deg);
      transform: translateX(9px) rotate(2.4deg);
    }
    75% {
      -webkit-transform: translateX(-6px) rotate(-1.2deg);
      transform: translateX(-6px) rotate(-1.2deg);
    }
  }`;
        
    

export default Card;
