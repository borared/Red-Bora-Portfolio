import React from "react";
import styled from "styled-components";

const View = ({ onClick }) => {
  return (
    <StyledWrapper>
      <button className="btn10" onClick={onClick}>
        View Detail
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn10 {
    display: inline-block;
    padding: 0.9rem 1.8rem;
    font-size: 16px;
    font-weight: 500;
    color: black;
    cursor: pointer;
    position: relative;
    background-color: white;
    text-decoration: none;
    overflow: hidden;
    z-index: 1;
    font-family: inherit;
    border-radius: 15px;
    transition: all 0.3s ease;
  }
`;

export default View;
