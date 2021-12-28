import React from "react";
import styled from "styled-components";
function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1> Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>

      <ButtonGroup>
        <LeftButton>Custom Order</LeftButton>
        <RightButton>Existing Invertory</RightButton>
      </ButtonGroup>
      <DownArrow src="/images/down-arrow.svg" />
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-image: url("/images/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  flex: 1;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  color: black;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;
