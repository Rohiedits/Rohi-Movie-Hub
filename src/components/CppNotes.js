import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="page">
        <div className="margin" />
        <p><h2 style={{textDecoration:"underline"}}>C++-Full-Course Topics In Rohi-Learning-Hub</h2></p><br/>
1.Setting up a C++ environment <br/>
2.Basic programming concepts <br/>
3.Programming structures <br/>
4.Core C++ concepts <br/>
5.Basic C++ program <br/>
6.Variables and data types <br/>
7.Strings <br/>
8.Numbers <br/>
9.User input <br/>
10.Building a calculator <br/>
11.Mad Libs game <br/>
12.Arrays <br/>
13.Functions <br/>
14.If statements <br/>
15.Calculator <br/>
16.Switch statements <br/>
17.While loops <br/>
18.For loops <br/>
19.Exponent function <br/>
20.Two-dimensional arrays <br/>
21.Nested for loops <br/>
22.Comments <br/>
23.Pointers <br/>
24.Classes and objects <br/>
25.Constructors <br/>
26.Object functions <br/>
27.Getters and setters <br/>
28.Inheritance 

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
