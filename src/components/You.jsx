import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        {/* Hidden gradients */}
        <svg height={0} width={0} viewBox="0 0 64 64" style={{ display: "none" }}>
          <defs>
            <linearGradient id="b" x1="0" y1="62" x2="0" y2="2" gradientUnits="userSpaceOnUse">
              <stop stopColor="#973BED" />
              <stop stopColor="#007CFF" offset="1" />
            </linearGradient>
            <linearGradient id="c" x1="0" y1="64" x2="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFC800" />
              <stop stopColor="#F0F" offset="1" />
            </linearGradient>
            <linearGradient id="d" x1="0" y1="62" x2="0" y2="2" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00E0ED" />
              <stop stopColor="#00DA72" offset="1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Left arc */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" height={64} width={64}>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={8}
            stroke="url(#b)"
            d="M 54.7,4 H60c-1,13-11,23.7-24,25.6a2,2 0 0 0-1.7,2V60H30V31.6a2,2 0 0 0-1.7-2C15,27.7,5,17,4,4h5.2C10.4,15.6,20.1,24.5,32,24.7c11.9.2,21.9-8.8,22.7-20.7z"
            className="dash"
            pathLength={360}
          />
        </svg>

        {/* Spinning circle */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" height={64} width={64} className="spin">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={10}
            stroke="url(#c)"
            d="M 32 32 m 0 -27 a 27 27 0 1 1 0 54 a 27 27 0 1 1 0 -54"
            className="dash"
            pathLength={360}
          />
        </svg>

        {/* Right arc */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" height={64} width={64}>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={8}
            stroke="url(#d)"
            d="M 4,4 h 4.6v25.9c0,11.9,9.8,21.6,21.7,21.3C42,50.9,51.4,41.5,51.6,29.9V4H56v25.9C56,44.2,44.4,56,29.9,56,15.8,56,4,44.4,4,29.9Z"
            className="dash"
            pathLength={360}
          />
        </svg>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  .dash {
    animation: dashArray 2s ease-in-out infinite, dashOffset 2s linear infinite;
  }

  .spin {
    animation: spin 6s linear infinite;
    transform-origin: center;
  }

  @keyframes dashArray {
    0% {
      stroke-dasharray: 0 1 359 0;
    }
    50% {
      stroke-dasharray: 0 359 1 0;
    }
    100% {
      stroke-dasharray: 359 1 0 0;
    }
  }

  @keyframes dashOffset {
    0% {
      stroke-dashoffset: 365;
    }
    100% {
      stroke-dashoffset: 5;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
