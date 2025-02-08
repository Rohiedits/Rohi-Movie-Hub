import React from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Hero from './Hero';

const Card = () => {
  return (
    <StyledWrapper>
        <Hero  text="👨‍💻 Academic Guide.."/> 
      <div className="cards">
        <div className="card red">
          <p className="tip">Control Systems</p>
          <Nav.Link href="/Controlsystems" >   <p  className="second-text">Start</p> </Nav.Link> 
        </div>
        <div className="card blue">
          <p className="tip">Digital Disign</p>
          <Nav.Link href="/Dd" >   <p  className="second-text">Start</p> </Nav.Link> 
        </div>
        <div className="card green">
          <p className="tip">Electrical Machines-II</p>
          <Nav.Link href="/em_2" >   <p  className="second-text">Start</p> </Nav.Link> 
        </div>
        <div className="card yellow">
          <p className="tip">Transmission and Distribution</p>
          <Nav.Link href="/Td" >   <p  className="second-text">Start</p> </Nav.Link> 
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cards {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 55px;
  }

  .cards .red {
    background-color: #f43f5e;
  }
  .cards .yellow {
    background-color: #CAFD3EFF;
  }

  .cards .blue {
    background-color: #3b82f6;
  }

  .cards .green {
    background-color: #22c55e;
  }

  .cards .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 150px;
    width: 100%;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: 400ms transform, 400ms box-shadow, 400ms background-color;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .cards .card p.tip {
    font-size: 1em;
    font-weight: 700;
  }

  .cards .card p.second-text {
    font-size: 0.7em;
  }

  .cards .card:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    background-color: rgba(255, 255, 255, 0.1);
    color: #333;
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }`;

export default Card;
