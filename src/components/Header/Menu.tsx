import React, { useState } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import Icon from "../Icon";

const Action = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);

  @media (${(props) => props.theme.tabletScreen}) {
    display: none;
  }
`;

const Wrapper = styled("div")<{ open: boolean }>`
  background-color: ${(props) => props.theme.backgroundSecondary};
  height: calc(100vh - 64px);
  width: 100%;
  position: absolute;
  top: 64px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transform: translateY(${(props) => (props.open ? 0 : 100)}%);
  transition: transform 0.5s ease;
  padding: 50px 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;
`;

const Headline = styled.h5`
  color: ${(props) => props.theme.secondary};
  font-size: 24px;
  line-height: 29px;
  font-weight: 400;
  letter-spacing: 0.02em;
  margin: 0;
`;

const SubTitle = styled.span`
  color: ${(props) => props.theme.textMedium};
  font-family: "Montserrat";
  font-size: 10px;
  line-height: 12px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-top: 12px;
`;

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Action onClick={() => setMenuOpen((prevState) => !prevState)}>
        <Icon name={isMenuOpen ? "Close" : "BurgerMenu"} size="large" />
      </Action>
      <Wrapper open={isMenuOpen}>
        <Headline>
          <FormattedMessage id={`menu.menu`} />
        </Headline>
        <SubTitle>
          <FormattedMessage id={`menu.projectBy`} />
        </SubTitle>
        <SubTitle>
          <FormattedMessage id={`menu.presentedBy`} />
        </SubTitle>
      </Wrapper>
    </>
  );
};

export default Menu;
