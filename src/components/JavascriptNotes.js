import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="page">
        <div className="margin" />
        <p><h2 style={{textDecoration:"underline"}}>JavaScript-Full-Course Topics In Rohi-Learning-Hub</h2></p><br/>
    

1.JavaScript syntax.<br/>
2.Numbers and Math.<br/>
3.Strings.<br/>
4.HTML, CSS, and JavaScript together.<br/>
5.Variables.<br/>
6.Booleans and if statements.<br/>
7.Functions.<br/>
8.Objects.<br/>
9.Document Object Model (DOM).<br/>
10.Loops.<br/>
11.Advanced functions.<br/>
12.Amazon Project.<br/>
13.Git.<br/>
14.Modules.<br/>
15.Checkout Page.<br/>
16.External Libraries.<br/>
17.Testing.<br/>
18.Object-oriented programming.<br/>
19.Backend.<br/>
20.HTTP messages.<br/>
21.Promises.<br/>
22.Fetch.<br/>
23.Async await.<br/>
24.Error handling.<br/>
25.URL parameters

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
