// import React from 'react'
// import Hero from './Hero'
// function controlsystem() {
//   return (
//     <div>
//         <Hero text=" Control-System.."/>
    
//       <img style={{width:"100%",height:"450px"}}src='https://media-hosting.imagekit.io//87a82e0f74034b3a/Screenshot 2025-02-08 110245.png?Expires=1833601517&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JFQNlWhmnOrjP68goNRSZJFA84SgGGcGy~R1jx14hkNqsWEW2ZF~gNR2zuQ-h-s01NvBw9FWdzMCBTOADkvjwuY3yeUVGEryw5LaSasRmCTVMn8G-YfyNet0FFBSq7YZAry~k5zzNwlzR4KZdL5hh1j9hYymI6OZindALmDYDxW1eu~Ue8bzz6L028GbiN209E5HFhWF08maeOAULH7B92iyrLij2Odeds44GYUWNUvq24VwlBKhQPUgqeVCUrkW5zgugyC0D6iYj7DDROY3tJ0s73o-PATLT782IUCLK-RKu94qh8yBH8MYmhVlQc1wpvzgdibmALT8U5nf2FsWig__'/>
//     </div>
//   )
// }

// export default controlsystem
import React from 'react'
import styled from 'styled-components';
import Hero from './Hero';
import Footer from './footer';
import Codeingbtn from './codingbtn'
import Aiphoto from './aiphoto';
const python4 = () => {
  return (
    <StyledWrapper>

        <Hero text=" Digital-Design."/>
        <div className='container'>
        <img style={{width:"960px",height:"455"}} className='youtube'src='https://dl1cuijfra.execute-api.us-east-1.amazonaws.com/image/eyJidWNrZXQiOiJ1bmktdXNlciIsImtleSI6InVuL3VuaXN1cHBvcnQxZmlsZXN1bmlzdXBwb3J0MTIwMjEtMTAtMTNUMTQtMzMtMzItMDY0OTg0LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTQ3MCwiZml0IjoiY292ZXIifSwiZmxhdHRlbiI6ZmFsc2UsIm5vcm1hbGlzZSI6ZmFsc2V9fQ=='/>
        <h2 style={{textAlign:'center',color:'blue'}}><u>COURSE CONTENT</u></h2>
        <h3 style={{textAlign:"center",paddingTop:"10px"}}>Module 1: NUMBER SYSTEMS AND BOOLEAN ALGEBRA</h3>
        <p style={{textAlign:"center"}}>Digital systems, Binary Numbers, Number base conversions, Complements of numbers,<br/>
Binary codes, Error detection and correction codes. Boolean Algebra-Basic definition, <br/>
Basic theorems and properties, Boolean Functions, Canonical & Standard forms, logic <br/>
operations & Logic gates.</p>
{/* <div className="p-4 flex justify-center">
      <div className="max-w-4xl">
        <iframe
          title="Module 1: MATHEMATICAL MODELING OF SYSTEMS"
          src="https://www.scribd.com/embeds/825445458/content?start_page=1&view_mode=slideshow&access_key=key-FMPHzkVUw1d2QQrH0krF"
          width="100%"
          height="800"
          frameBorder="0"
          scrolling="no"
          className="rounded-2xl shadow-lg"
        ></iframe>
        <p className="text-center mt-4 font-medium">
          <a
            href="https://www.scribd.com/document/825445458/Module-1-MATHEMATICAL-MODELING-OF-SYSTEMS#from_embed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Module 1: MATHEMATICAL MODELING OF SYSTEMS
          </a>
          {' '}by{' '}
          <a
            href="https://www.scribd.com/user/832765700/Bv-Rohith#from_embed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            
          </a>
        </p>
      </div>
      
    </div> */}


<h3 style={{textAlign:"center",paddingTop:"10px"}}>Module 2: GATE LEVEL MINIMIZATION</h3>
<p style={{textAlign:"center"}}>The map method, four variable, Five variable K-map, POS & SOP Simplification, Don’t <br/>
care conditions, NAND & NOR Implementation, Tabular Method- Simplification of <br/>
Boolean function.</p>

<h3 style={{textAlign:"center",paddingTop:"10px"}}>Module 3: COMBINATIONAL LOGIC CIRCUIT DESIGN </h3>
<p style={{textAlign:"center"}}>
Combinational circuits, Adders, Subtractors, Binary Adder-Subtractor, Decimal Adder, <br/>
carry look-a–head adder, Binary Multiplier, Magnitude comparator, Decoder, Encoders, <br/>
Priority Encoder, Multiplexers. <br/>
</p>


<h3 style={{textAlign:"center",paddingTop:"10px"}}>Module 4: SEQUENTIAL LOGIC CIRCUIT DESIGN</h3>
<p style={{textAlign:"center"}}>Sequential Circuits, Latches, Flip-Flops-SR, D, JK & T, Introduction to RegistersUniversal Shift Registers,<br/>
     State table and state diagrams, State Reduction & Assignment, <br/>
Sequence Detector, Design of counters-Modulo-n, Johnson, Ring, Up/Down.</p>



<h3  style={{textAlign:"center",paddingTop:"10px"}}>Module 5:ASYNCHRONOUS SEQUENTIAL LOGIC & PROGRAMMABLE MEMORIES</h3>
<p style={{textAlign:"center"}}>Analysis of Clocked sequential circuits, State Reduction & Assignment- partition <br/>
technique, merger chart & merger table, Hazards<br/>
Programmable Memories: ROM, PLA, PAL</p>


    <center><h3>Text-Book</h3></center>
    <div className="flex flex-col items-center">
      <iframe
        className="w-full"
        title="Digital-Design-Hand Written Notes"
        src="https://www.scribd.com/embeds/826570534/content?start_page=1&view_mode=slideshow&access_key=key-DxMsbE1Ne94BWjDN4Td8"
        tabIndex="0"
        data-auto-height="true"
        data-aspect-ratio="0.7729220222793488"
        scrolling="no"
        width="100%"
        height="600"
        frameBorder="0"
      ></iframe>
      <p className="mt-3 text-center text-sm text-gray-700">
        <a
          title="View Digital-Design-Hand Written Notes on Scribd"
          href="https://www.scribd.com/document/826570534/Digital-Design-Hand-Written-Notes#from_embed"
          className="underline text-blue-600 hover:text-blue-800"
        >
          Digital-Design-Hand Written...
        </a>
        &nbsp;by&nbsp;
        <a
          title="View Bv.Rohith's profile on Scribd"
          href="https://www.scribd.com/user/832765700/Bv-Rohith#from_embed"
          className="underline text-blue-600 hover:text-blue-800"
        >
          Bv.Rohith
        </a>
      </p>
    

      <h2 style={{textAlign:"center",color:"grey",paddingTop:"20px"}}>2-2 MID-1 Question Papers</h2>
      <iframe src="https://drive.google.com/file/d/1Fh245v3on48E2b4oQh-zec2aANfs-Nk6/preview" width="100%" height="680" ></iframe>


    </div>



    <a href="#" >   <Codeingbtn/>   </a>
    <Footer/>
    <Aiphoto/>
        </div>

     

      
    </StyledWrapper>
  )
}
const StyledWrapper = styled.div`
.container {
    max-width: 1500px;
            margin: 20px auto;
            padding: 20px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        h1 {
            font-size: 2rem;
            margin-bottom: 10px;
        }

        h2 {
            font-size: 1.5rem;
            margin-top: 20px;
        }

        h3 {
            font-size: 1.25rem;
            margin-bottom: 10px;
        }

        ul {
            list-style: disc inside;
            margin: 10px 0;
            padding: 0;
        }

        .btn {
            display: inline-block;
            margin: 10px 0;
            padding: 10px 20px;
            color: #fff;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            font-size: 1rem;
            cursor: pointer;
        }
        .question {
            font-weight: bold;
        }

        .btn:hover {
            background-color: #0056b3;
        }

        .section {
            margin-bottom: 20px;
        }

        .example-section {
            margin-bottom: 20px;
        }

        .code-block {
            background: #f4f4f4;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-family: monospace;
            overflow-x: auto;
        }

        .exercise {
            background: #f9f9f9;
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 5px;
        }

        .options {
            list-style: none;
            padding: 0;
        }
        .youtube{
   
   max-width: 100%;
   height:315;
   display: block;
   position: relative;
   justify-content: center;
   align-items: center;
    margin-left: auto;
    margin-right: auto;
   

     border-radius: 0.5rem;
     padding: 0.25rem;
     background-color: rgb(172, 250, 233);
     background-size: cover;
    background-image: linear-gradient(
      135deg,
      rgba(172, 250, 233, 1) 0%,
      rgba(213, 143, 235, 1) 50%,
      rgba(242, 126, 241, 1) 100%
    );
    transform-origin: center;
    transform: rotateX(var(--X)) rotateY(var(--Y)) rotateZ(var(--Z));
    transition: transform 0.3s ease-in-out;
  }
  .quiz-section {
            margin-bottom: 30px;
        }
        .glossary {
            background: #f1f1f1;
            padding: 15px;
            border-radius: 8px;
        }
        .glossary dt {
            font-weight: bold;
        }

`;

export default python4

