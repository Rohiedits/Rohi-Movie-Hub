import React from 'react';
import styled from 'styled-components';

const Switch = () => {
  return (
    <StyledWrapper>
    
      <div className="container" >
          <input type="checkbox" name="check" id="check" hidden />
          <label htmlFor="check" className="toggle">
          {/* <a className='non' href="https://www.w3schools.com/python/trypython.asp?filename=demo_default"> */}
          <div className="toggle__circle" />
          {/* </a> */}
             </label>
                <div className="toggle-text">
               <span ><a className='non' href="https://www.w3schools.com/python/trypython.asp?filename=demo_default">N</a></span>
              <span>FF</span>
        </div>
        
      </div>
     
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

  .container {
    margin-top: 20px;
    margin-left: 40%;
    color: hsl(0, 0%, 30%);
    font-weight: 900;
    font-size: 6rem;
    display: flex;
    max-width: 100%;

  }

  .toggle {
    width: 60px;
    height: 155px;
    background-color: hsl(0, 0%, 80%);
    border-radius: 1.7rem;
    padding: 0.25rem 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: background-color 300ms 300ms;
  }

  .toggle__circle {
    width: 50px;
    height: 50px;
    background-color: hsl(0, 0%, 95%);
    border-radius: 50%;
    margin-top: calc(155px - (0.25rem * 2) - 50px);
    transition: margin 500ms ease-in-out;
  }
.non{
    text-decoration: none;
}
  .toggle-text {
    display: flex;
    flex-direction: column;
    line-height: 0.8;
  }

  #check:checked + .toggle > .toggle__circle {
    margin-top: 0;
  }

  #check:checked + .toggle {
    background-color: #41a63c;
  }`;

export default Switch;
