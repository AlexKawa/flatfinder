import React from "react";
import styled from "styled-components";

import ControlBar from "./ControlBar";

const Wrapper = styled.section`
  position: relative;
  display: none;
  flex: 1;
  max-width: 300px;
  margin: 0 10px;
  background-color: ${(props) => props.theme.backgroundSecondary};
  border-radius: 10px;

  @media (${(props) => props.theme.tabletScreen}) {
    display: flex;
  }
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <ControlBar />
    </Wrapper>
  );
};

export default Sidebar;
