import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
       <hr/>
      <div className="card1">
        <div className="image_container">
          {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="image">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
          </svg> */}
          {/* <img src='pythonimage.jpg'className='container'/> */}
          <img src='https://tse1.mm.bing.net/th?id=OIP.Jl2AWryzVJ0fIag0lgzfugHaKe&pid=Api&P=0&h=180'className='container'/>

        </div>
        <div className="title">
          <span>Python Notes</span>
        </div>
        <div className="size">
          <span>Hand-Written</span>
          {/* <ul className="list-size">
            <li className="item-list"><button className="item-list-button">1.8.9</button></li>
            <li className="item-list">
              <button className="item-list-button">1.21.1</button>
            </li>
          </ul> */}
        </div>
        
      </div>
      <button className="download-button">
        <div className="docs">
          <svg viewBox="0 0 24 24" width={20} height={20} stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1={16} y1={13} x2={8} y2={13} />
            <line x1={16} y1={17} x2={8} y2={17} />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          Download
        </div>
        <div className="download">
          <svg viewBox="0 0 24 24" width={24} height={24} stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1={12} y1={15} x2={12} y2={3} />
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .download-button {
    width: 100%;
    position: relative;
    
    border-width: 0;
    color: white;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 4px;
    z-index: 1;
  }

  .download-button .docs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-height: 40px;
    padding: 0 10px;
    border-radius: 4px;
    z-index: 1;
    background-color: #242a35;
    border: solid 1px #e8e8e82d;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  }

  .download-button:hover {
    box-shadow:
      rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  .download {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 90%;
    margin: 0 auto;
    z-index: -1;
    border-radius: 4px;
    transform: translateY(0%);
    background-color: #01e056;
    border: solid 1px #01e0572d;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  
  }

  .download-button:hover .download {
    transform: translateY(100%);
  }

  .download svg polyline,
  .download svg line {
    animation: docs 1s infinite;
  }

  @keyframes docs {
    0% {
      transform: translateY(0%);
    }

    50% {
      transform: translateY(-15%);
    }

    100% {
      transform: translateY(0%);
    }
  }`;

export default Button;
