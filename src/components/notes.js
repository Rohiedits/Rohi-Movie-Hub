import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="page">
        <div className="margin" />
        <p><h2 style={{textDecoration:"underline"}}>Python-Full-Course Topics In Rohi-Learning-Hub</h2><br/>1.What is Python<br/>
2.Python Variables<br/>
3.Python Data Types<br/>
4.Python Numbers<br/>
5.Python Casting<br/>
6.Python Strings<br/>
7.Python Booleans<br/>
8.Python Python Operators<br/>
9.Python Python Lists<br/>
10.Python Python Tuples<br/>
11.Python Python Sets<br/>
12.Python Dictionaries<br/>
13.Python If...Else<br/>
14.Python While Loops<br/>
15.Python For Loops<br/>
16.Python Functions<br/>
17.Python Lambda<br/>
18.Python Arrays<br/>
19.Python Classes/Objects<br/>
20.Python Inheritance<br/>
21.Python Iterators<br/>
22.Python Polymorphism<br/>
23.Python Scope<br/>
24.Python Modules<br/>
25.Python Dates<br/>
26.Python Math<br/>
27.Python JSON<br/>
28.Python RegEx<br/>
</p>
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
