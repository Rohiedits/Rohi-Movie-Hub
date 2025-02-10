// import React from 'react';
// import styled from 'styled-components';

// const Switch = () => {
//   return (
//     <StyledWrapper>
    
//       <div className="container" >
//           <input type="checkbox" name="check" id="check" hidden />
//           <label htmlFor="check" className="toggle">
//           {/* <a className='non' href="https://www.w3schools.com/python/trypython.asp?filename=demo_default"> */}
//           <div className="toggle__circle" />
//           {/* </a> */}
//              </label>
//                 <div className="toggle-text">
//                <span ><a className='non' href="https://www.w3schools.com/python/trypython.asp?filename=demo_default">N</a></span>
//               <span>FF</span>
//         </div>
        
//       </div>
     
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`

//   .container {
//     margin-top: 20px;
//     margin-left: 40%;
//     color: hsl(0, 0%, 30%);
//     font-weight: 900;
//     font-size: 6rem;
//     display: flex;
//     max-width: 100%;

//   }

//   .toggle {
//     width: 60px;
//     height: 155px;
//     background-color: hsl(0, 0%, 80%);
//     border-radius: 1.7rem;
//     padding: 0.25rem 0;
//     cursor: pointer;
//     display: flex;
//     justify-content: center;
//     transition: background-color 300ms 300ms;
//   }

//   .toggle__circle {
//     width: 50px;
//     height: 50px;
//     background-color: hsl(0, 0%, 95%);
//     border-radius: 50%;
//     margin-top: calc(155px - (0.25rem * 2) - 50px);
//     transition: margin 500ms ease-in-out;
//   }
// .non{
//     text-decoration: none;
// }
//   .toggle-text {
//     display: flex;
//     flex-direction: column;
//     line-height: 0.8;
//   }

//   #check:checked + .toggle > .toggle__circle {
//     margin-top: 0;
//   }

//   #check:checked + .toggle {
//     background-color: #41a63c;
//   }`;

// export default Switch;
// import React from 'react';
// import styled from 'styled-components';

// const Button = () => {
//   return (
//     <StyledWrapper>
//       <button className="button" >
//         <svg viewBox="-38 0 332 332" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <defs> <linearGradient x1="55.1170996%" y1="58.6795405%" x2="63.6801778%" y2="39.5971572%" id="linearGradient-1"> <stop stopColor="#FF9700" offset="0%"> </stop> <stop stopColor="#F48E00" offset="53%"> </stop> <stop stopColor="#D06F00" offset="100%"> </stop> </linearGradient> </defs> <g> <path d="M255.288325,166.794648 C255.288325,162.908052 252.415934,160.666877 248.891046,161.780372 L6.39727934,238.675387 C2.86530029,239.795974 0,243.859878 0,247.73938 L0,326.329461 C0,330.216057 2.86530029,332.464324 6.39727934,331.343737 L248.891046,254.455814 C252.415934,253.335227 255.288325,249.271323 255.288325,245.384729 L255.288325,166.794648 L255.288325,166.794648 Z" fill="url(#linearGradient-1)"> </path> <path d="M5.68434189e-14,164.291056 C5.68434189e-14,168.177652 2.86530029,172.241555 6.39727934,173.362144 L248.926508,250.26425 C252.458487,251.384837 255.323787,249.13657 255.323787,245.257067 L255.323787,166.659893 C255.323787,162.780391 252.458487,158.716487 248.926508,157.595899 L6.39727934,80.693793 C2.86530029,79.5732052 5.68434189e-14,81.8143808 5.68434189e-14,85.7009761 L5.68434189e-14,164.291056 Z" fill="#FF9800"> </path> <path d="M255.288325,5.30235244 C255.288325,1.41575701 252.415934,-0.83251079 248.891046,0.288076943 L6.39727934,77.1759986 C2.86530029,78.2965864 0,82.36049 0,86.2470854 L0,164.837165 C0,168.723761 2.86530029,170.964936 6.39727934,169.851441 L248.891046,92.9564272 C252.415934,91.8358394 255.288325,87.7719358 255.288325,83.8924327 L255.288325,5.30235244 Z" fill="#FF9800"> </path> </g> </g></svg>
//         <a  href="https://www.online-python.com/" className="text">Coding-Compiler</a>
//       </button>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .button {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 10px 15px;
//     gap: 15px;
//     background-color: rgb(66 66 66);
//     outline: 3px rgb(66 66 66) solid;
//     outline-offset: -3px;
//     border-radius: 5px;
//     border: none;
//     cursor: pointer;
//     transition: 400ms;
//     width: 750px;
//   }

//   .button .text {
//     color: white;
//     font-weight: 700;
//     font-size: 1em;
//     transition: 400ms;
//   }

//   .button svg {
//     width: 24px;
//     height: 24px;
//   }

//   .button svg path {
//     transition: 400ms;
//   }

//   .button:hover {
//     background-color: transparent;
//   }

//   .button:hover .text {
//     color: #F48E00;
//   }

//   .button:hover svg path:nth-child(1) {
//     fill: #FF9700;
//   }

//   .button:hover svg path:nth-child(2) {
//     fill: #F48E00;
//   }

//   .button:hover svg path:nth-child(3) {
//     fill: #FF9800;
//   }`;

// export default Button;
// import React from 'react';
// import styled from 'styled-components';

// const Button = () => {
//   return (
//     <StyledWrapper>
//       <div className="background-button">
//         <button className="button">
//           <a href='https://www.online-python.com/' style={{textDecoration:"none",color:"white"}}>CODING</a>
//         </button>
//       </div>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .background-button {
//     background: repeating-linear-gradient(
//       45deg,
//       #3c2209 0 20px,
//       #ff9c00 20px 40px
//     );
//     width: 10em;
//     height: 10em;
//     -webkit-box-shadow: 15px 15px 50px 5px #5f5f5f;
//     box-shadow: 15px 15px 50px 5px #5f5f5f;
//     position: relative;
//     display: inline-block;
//     outline: 2px solid black;
//   }

//   .background-button::before {
//     content: "";
//     display: inline-block;
//     position: absolute;
//     top: 15%;
//     left: 15%;
//     width: 70%;
//     height: 70%;
//     background: #a0b8c4;
//     border: 2px solid #3c2209;
//   }

//   .button {
//     background: #cc2a1f;
//     width: 65%;
//     height: 65%;
//     border-radius: 50%;
//     position: absolute;
//     top: 7.5%;
//     left: 18.25%;
//     color: white;
//     font-size: 1em;
//     font-weight: 900;
//     font-family: 'Courier New', Courier, monospace;
//     -webkit-box-shadow: 0 15px 0 0 #842a2a;
//     box-shadow: 0 15px 0 0 #842a2a;
//     -webkit-transition: all .5s ease;
//     transition: all .5s ease;
//     border: 2px solid black;
//   }

//   .button:active {
//     -webkit-box-shadow: 0 1px 1px 1px #8C0606;
//     box-shadow: 0 1px 1px 1px #8C0606;
//     top: 15%;
//   }

//   .background-button:has(.button:active) + .emergency {
//     display: block;
//     -webkit-transform: rotate(0deg) scaleY(1);
//     -ms-transform: rotate(0deg) scaleY(1);
//     transform: rotate(0deg) scaleY(1);
//     -webkit-animation: anims 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
//     animation: anims 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
//   }

//   @keyframes anims {
//     0% {
//       -webkit-transform: rotate(-30deg) scaleY(0.25);
//       transform: rotate(-30deg) scaleY(0.25);
//     }

//     100% {
//       -webkit-transform: rotate(0deg) scaleY(1);
//       transform: rotate(0deg) scaleY(1);
//     }
//   }

//   .emergency {
//     position: absolute;
//     display: none;
//   }`;

// export default Button;
import React from 'react'

function mood() {
  return (
    <div>
      
    </div>
  )
}

export default mood
