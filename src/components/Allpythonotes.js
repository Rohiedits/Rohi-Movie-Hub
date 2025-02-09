// import React from 'react'
// import Hero from './Hero'
// import Note from './notes'
// // import Downloadnotes from './downloadnotes'
// import ScribdEmbed from './embedednotes.js';
// import Footer from './footer.js'
// function Allpythonotes() {
//   return (
//     <StyledWrapper>
//         <Hero  text="👨‍💻 Python  Full Course Hand-Written Notes.."/><br/>
//         <Note/><br/>
//         <ScribdEmbed/>
//         <hr/>
//         <Footer/>

        

     
//     </StyledWrapper>
//     const StyledWrapper = styled.div`
//     .container {
//         max-width: 1500px;
//                 margin: 20px auto;
//                 padding: 20px;
//                 background: #fff;
//                 border-radius: 10px;
//                 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//             }
    
//             h1 {
//                 font-size: 2rem;
//                 margin-bottom: 10px;
//             }
    
//             h2 {
//                 font-size: 1.5rem;
//                 margin-top: 20px;
//             }
    
//             h3 {
//                 font-size: 1.25rem;
//                 margin-bottom: 10px;
//             }
    
//             ul {
//                 list-style: disc inside;
//                 margin: 10px 0;
//                 padding: 0;
//             }
    
//             .btn {
//                 display: inline-block;
//                 margin: 10px 0;
//                 padding: 10px 20px;
//                 color: #fff;
//                 background-color: #007bff;
//                 border: none;
//                 border-radius: 5px;
//                 text-decoration: none;
//                 font-size: 1rem;
//                 cursor: pointer;
//             }
//             .question {
//                 font-weight: bold;
//             }
    
//             .btn:hover {
//                 background-color: #0056b3;
//             }
    
//             .section {
//                 margin-bottom: 20px;
//             }
    
//             .example-section {
//                 margin-bottom: 20px;
//             }
    
//             .code-block {
//                 background: #f4f4f4;
//                 padding: 10px;
//                 border: 1px solid #ddd;
//                 border-radius: 5px;
//                 font-family: monospace;
//                 overflow-x: auto;
//             }
    
//             .exercise {
//                 background: #f9f9f9;
//                 border: 1px solid #ddd;
//                 padding: 15px;
//                 border-radius: 5px;
//             }
    
//             .options {
//                 list-style: none;
//                 padding: 0;
//             }
//             .youtube{
       
//        max-width: 100%;
//        height:315;
//        display: block;
//        position: relative;
//        justify-content: center;
//        align-items: center;
//         margin-left: auto;
//         margin-right: auto;
       
    
//          border-radius: 0.5rem;
//          padding: 0.25rem;
//          background-color: rgb(172, 250, 233);
//          background-size: cover;
//         background-image: linear-gradient(
//           135deg,
//           rgba(172, 250, 233, 1) 0%,
//           rgba(213, 143, 235, 1) 50%,
//           rgba(242, 126, 241, 1) 100%
//         );
//         transform-origin: center;
//         transform: rotateX(var(--X)) rotateY(var(--Y)) rotateZ(var(--Z));
//         transition: transform 0.3s ease-in-out;
//       }
//       .quiz-section {
//                 margin-bottom: 30px;
//             }
//             .glossary {
//                 background: #f1f1f1;
//                 padding: 15px;
//                 border-radius: 8px;
//             }
//             .glossary dt {
//                 font-weight: bold;
//             }
    
//     `;
//   )
// }

// export default Allpythonotes
import React from 'react'
import styled from 'styled-components';
import Hero from './Hero';
import ScribdEmbed from './embedednotes.js';
import Footer from './footer.js'
import Note from './notes'
const python4 = () => {
  return (
    <StyledWrapper>


<Hero  text="👨‍💻 Python  Full Course Hand-Written Notes.."/><br/>
<div className='container'>
    <h2><center>Python Full Course Hand-Written Notes & All-In-One Video</center></h2><br/>
<Note/><br/>
<center>
<h2> Python Full Course-In-One Video (or) All-In-One Video</h2></center>
<iframe width="960"  height="455" className='youtube' src="https://www.youtube.com/embed/YfO28Ihehbk?si=zkZl1Z941P6L838T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br/>
       <ScribdEmbed/>
         <hr/>
       <Footer/>

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
