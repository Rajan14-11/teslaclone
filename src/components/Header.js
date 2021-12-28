import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Container>
      <Logo>
        <img src="/images/logo.svg" />
      </Logo>
      <Menu>
        <button>Model 3</button>
        <button>Model S</button>
        <button>Model Y</button>
        <button>Model X</button>
        <button>Solar Panels</button>
        <button>Solar Roof</button>
      </Menu>
      <RightMenu>
        <button>Shop</button>
        <button>Account</button>
        <button>Menu</button>
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100vw;
  min-height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

const Logo = styled.div`
  width: 20vw;
`;

const Menu = styled.div`
  display: flex;
  button {
    padding: 0.5vh 1vw;
    background: transparent;
    border: none;
    font-size: 16px;
    font-weight: bolder;
    transition: auto cubic-bezier();

    &:hover {
      background: rgb(196 216 239);
      border-radius: 20px;
      color: black;
    }
  }

  @media (max-width: 1060px) {
    display: none;
  }
`;

const RightMenu = styled(Menu)`
  width: 20vw;
  @media (max-width: 1060px) {
    display: block;
    width: 80vw;
    display: flex;
    justify-content: end;
  }
`;
