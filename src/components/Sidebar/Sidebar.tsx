import React, { useState } from "react";
import styled from "styled-components";

import ControlBar from "./ControlBar";
import Navigation from "./Navigation";

const Wrapper = styled("section")<{ level: number }>`
  position: relative;
  display: none;
  flex: 1;
  margin: 0 10px;
  padding: 10px;
  background-color: ${(props) => props.theme.backgroundSecondary};
  border-radius: 10px;
  transition: max-width 1.5s ease-in-out;

  ${({ level }) => level === 1 && `max-width: 300px;`};
  ${({ level }) => level === 2 && `max-width: 460px;`};

  @media (${(props) => props.theme.tabletScreen}) {
    display: flex;
    flex-direction: column;
  }
`;

const Sidebar = () => {
  const [level, setLevel] = useState(1);

  return (
    <Wrapper level={level}>
      <ControlBar />
      <Navigation setLevel={(lvl) => setLevel(lvl)} />
    </Wrapper>
  );
};

export default Sidebar;
