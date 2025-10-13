import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="box">
        <span />
        <div className="content">
          <h2>Hello</h2>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .box {
   position: relative;
   width: 220px;
   height: 300px;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: 0.5s;
   z-index: 1;
  }

  .box::before {
   content: ' ';
   position: absolute;
   top: 0;
   left: 50px;
   width: 50%;
   height: 100%;
   text-decoration: none;
   background: #fff;
   border-radius: 8px;
   transform: skewX(15deg);
   transition: 0.5s;
  }

  .box::after {
   content: '';
   position: absolute;
   top: 0;
   left: 50;
   width: 50%;
   height: 100%;
   background: #fff;
   border-radius: 8px;
   transform: skewX(15deg);
   transition: 0.5s;
   filter: blur(15px);
  }

  .box:hover:before,
  .box:hover:after {
   transform: skewX(0deg) scaleX(1.3);
  }

  .box:before,
  .box:after {
   background: linear-gradient(315deg, #ffbc00, #ff0058)
  }

  .box span {
   display: block;
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 5;
   pointer-events: none;
  }


  .box span::before {
   top: -40px;
   left: 40px;
   width: 50px;
   height: 50px;
   opacity: 1;
  }


  .box span:after {
   bottom: -40px;
   right: 40px;
   width: 50px;
   height: 50px;
   opacity: 1;
  }

 

  .box .content h2 {
   font-size: 20px;
   color: #fff;
   margin-bottom: 10px;
  }`;

export default Card;
