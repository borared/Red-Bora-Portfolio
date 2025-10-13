import React from 'react';
import styled from 'styled-components';

const Grid = ({ src, alt }) => (
  <StyledWrapper>
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={src} alt={alt} />
        </div>
      </div>
    </div>
  </StyledWrapper>
);
const StyledWrapper = styled.div`
  .card {
    width: 600px;
    height: 200px;
    perspective: 1000px;
  }

  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
  }



  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .card-front {
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    display: flex;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 25px;
    justify-content: center;
    font-size: 24px;
    
    background: transparent;
  }

  .card-front img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* fill the card while preserving aspect */
    border-radius: 25px;
    opacity: 0.5;
  }

  

  `;

export default Grid;
