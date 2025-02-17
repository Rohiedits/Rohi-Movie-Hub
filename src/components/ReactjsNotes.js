import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="page">
        <div className="margin" />
        <p><h2 style={{textDecoration:"underline"}}>Reactjs-Full-Course Topics In Rohi-Learning-Hub</h2></p><br/>
    
1.About Reactjs <br/>
2.Change Name<br/>
3.Components folder<br/>
4.Card container<br/>
5.Card details section<br/>
6.Card reviews<br/>
7.Recommended Flex<br/>
8.Recommended titles<br/>
9.Sidebar<br/>
10.Logo container<br/>
11.Category<br/>
12.Price<br/>
13.Colors<br/>
14.Products<br/>
15.Today's Top Trends<br/>
16.Topics for you<br/>
17.Contact me<br/>
18.Popular Blogs<br/>
19.Top Sellers<br/>
20.New Products<br/>
21.Future Products<br/>
22.Home page<br/>
23.About page<br/>
24.Contact page<br/>
25.Not found<br/>
26.Login page<br/>
27.Users


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
