import React from 'react';
import styled from 'styled-components';

const Grid = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <p>Front Side</p>
          </div>
          <div className="card-back">
            <p>BORA</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 500px;
    height: 180px;
    perspective: 1000px;
  }

  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
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
    transform: rotateY(0deg);
  }

  .card-back {
    background-color: rgba(255, 165, 0, 0.2);
    color: #fff;
    display: flex;
    align-items: center;
    border: 1px solid rgba(255, 165, 0, 0.2);
    border-radius: 25px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(180deg);
  }`;

export default Grid;
