import React from 'react'
import Roadmapbtn from './roadmap.png';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

function Roadmapbtn1() {
  return (
    <StyledWrapper>
       <Nav.Link href="/RoadMap" >   <img src={Roadmapbtn} className='roadmapbtn' alt='roadmapbtn' />   </Nav.Link>
    </StyledWrapper>
  )
}
const StyledWrapper = styled.div`

.roadmapbtn {
  margin-left: 70%;
  position: relative;
  border: 1px solid #000;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
  position: relative;
}`;

export default Roadmapbtn1
