import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="page">
        <div className="margin" />
        <p><h2 style={{textDecoration:"underline"}}>Ruby-Full-Course Topics In Rohi-Learning-Hub</h2></p><br/>
    
1.Installing Ruby<br/>
2.Setting Up a Text Editor (Atom)<br/>
3.Creating a Ruby File<br/>
4.Printing to the Screen (print vs. puts)<br/>
5.Variables<br/>
6.Data Types<br/>
7.Strings<br/>
8.String Methods/Functions<br/>
9.Numbers<br/>
10.Number Methods<br/>
11.Getting Input from the User<br/>
12.Mad Libs Game<br/>
13.Arrays<br/>
14.Hashes<br/>
15.Methods<br/>
16.Returns in Methods<br/>
17.If Statements<br/>
18.Comparisons in If Statements<br/>
19.Calculator Program<br/>
20.Case Expressions<br/>
21.While Loops<br/>
22.Guessing Game<br/>
23.For Loops<br/>
24.Exponents Method<br/>
25.Comments<br/>
27.Reading from External Files<br/>
28.Writing to Files<br/>
29.Exception Handling<br/>
30.Classes and Objects<br/>
31.Honours Program<br/>
32.Multiple Choice Quiz<br/>
33.Chef Class<br/>
34.Modules

      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .page {
    position: relative;
    box-sizing: border-box;
    max-width: 3000px;
    font-family: cursive;
    font-size: 20px;
    border-radius: 10px;
    background: #fff;
    background-image: linear-gradient(#f5f5f0 1.1rem, #ccc 1.2rem);
    background-size: 100% 1.2rem;
    line-height: 1.2rem;
    padding: 1.4rem 0.5rem 0.3rem 4.5rem;
  }

  .page::before,
  .page::after {
    position: absolute;
    content: "";
    bottom: 10px;
    width: 40%;
    height: 10px;
    box-shadow: 0 5px 14px rgba(0, 0, 0, 0.7);
    z-index: -1;
    transition: all 0.3s ease;
  }

  .page::before {
    left: 15px;
    transform: skew(-5deg) rotate(-5deg);
  }

  .page::after {
    right: 15px;
    transform: skew(5deg) rotate(5deg);
  }

  .page:hover::before,
  .page:hover::after {
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.4);
  }

  .margin {
    position: absolute;
    border-left: 1px solid #d88;
    height: 100%;
    left: 3.3rem;
    top: 0;
  }

  .page p {
    margin: 0;
    text-indent: 1rem;
    padding-bottom: 1.2rem;
    color: black;
    line-height: 20px;
  }`;

export default Card;
