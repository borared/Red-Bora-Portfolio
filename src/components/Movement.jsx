import React from 'react';
import styled from 'styled-components';

const Movement = () => {
  return (
    <StyledWrapper>
      <main className="container-loader">
        <aside className="loader" />
      </main>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container-loader {
    position: relative;
    transform-style: preserve-3d;
    overflow: hidden;
    transform: translateX(0%);
    animation: perspective 20s linear infinite both;

    &,
    .loader {
      height: 100%;
      width: 100%;
    }

    .loader {
      --color: #00f;
      position: absolute;
      background: repeating-linear-gradient(
          transparent 0 30px,
          var(--color) 31px 32px
        ),
        repeating-linear-gradient(
          to right,
          transparent 0 30px,
          var(--color) 31px 32px
        );
      border-left: 1px solid var(--color);
      border-top: 1px solid var(--color);
      transform: rotateX(37deg);
      top: 0;
    }
  }

  @keyframes perspective {
    0% {
      perspective: 1px;
    }

    100% {
      perspective: 50px;
    }
  }`;

export default Movement;
