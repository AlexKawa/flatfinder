import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

import Menu from "./Menu";
import Aside from "./Aside";

const Wrapper = styled.section`
  position: relative;
  height: 70px;
  width: 100%;

  @media (${(props) => props.theme.tabletScreen}) {
    height: 135px;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  height: 45px;

  @media (${(props) => props.theme.tabletScreen}) {
    height: 65px;
  }
`;

const HeaderBar = () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="Logo" />

      {/* Desktop only */}
      <Aside />
      {/* Mobile Only */}
      <Menu />
    </Wrapper>
  );
};

export default HeaderBar;
