import React from 'react';
import styled from 'styled-components';

const Card = () => (
    <StyledWrapper>
        <a className="card" href>
            <div className="containers">
                <div className="icon-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 29" height={29} width={28}>
                        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#23C55E" d="M23.7222 9.04435V6.71102C23.7222 5.42235 22.6775 4.37769 21.3888 4.37769L6.61106 4.37769C5.32239 4.37769 4.27773 5.42235 4.27773 6.71102V9.04435C4.27773 10.333 5.32239 11.3777 6.61106 11.3777H21.3888C22.6775 11.3777 23.7222 10.333 23.7222 9.04435Z" />
                        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#23C55E" d="M23.7222 21.4888V19.1555C23.7222 17.8668 22.6775 16.8221 21.3888 16.8221H15.9444C14.6557 16.8221 13.6111 17.8668 13.6111 19.1555V21.4888C13.6111 22.7775 14.6557 23.8221 15.9444 23.8221H21.3888C22.6775 23.8221 23.7222 22.7775 23.7222 21.4888Z" />
                    </svg>
                </div>
                <div className="title mb-3">CODING  MOOD DETAILS</div>
                <div className="subtitle">
                    When Switch ON We Navigated to Coding Mood and New Python Compiler Tab Will Be Opened
                </div>
                <div className="btnRound btnService">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 18" height={18} width={19}>
                        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#23C55E" d="M3.51141 2.78405L14.9344 6.95805C15.4154 7.13405 15.4014 7.81905 14.9134 7.97605L9.68541 9.64905L8.01241 14.8771C7.85641 15.3651 7.17041 15.3791 6.99441 14.8981L2.82141 3.47405C2.66441 3.04405 3.08141 2.62705 3.51141 2.78405Z" />
                    </svg>
                </div>
            </div>
        </a>
    </StyledWrapper>
)

const StyledWrapper = styled.div`
  .card {
    position: relative;
    display: flex;
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
    padding: 42px 32px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 30px;
    border: 2px solid #f8f9fd;
    background: #fff;
    transition: 1s all;
    text-decoration: none;
  }
  .title {
    color: #072713;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 35.196px;
    transition: 0.4s all;
  }
  .subtitle {
    color: #7e8882;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    transition: 0.4s all;
  }
  .icon-circle {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #e5f6eb;
  }
  .card:hover {
    background: #23c55e;
    transition: 0.4s all;
  }
  .card:hover .title,
  .card:hover .subtitle {
    color: #fff;
    transition: 0.4s all;
  }
  .btnRound {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    padding: 6px 28px;
    border-radius: 100px;
    border: 1px solid #23c55e;
    background: #fff;
    transition: all 0.2s ease;
  }
  .btnRound:hover {
    box-shadow: 0px 6px 10px 0px rgba(35, 197, 94, 0.2);
    transition: all 0.2s ease;
  }
  .btnService {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translate(-50%, -50%);
  }`;

export default Card;
