import React from "react";
import styled from "styled-components";

import SquareButton from "../SquareButton";

const Wrapper = styled.div`
  position: absolute;
  transform: translateY(-100%);
  display: flex;
  width: 100%;
  top: -10px;
`;

const Action = styled(SquareButton)`
  &:not(:first-child) {
    margin-left: 10px;
  }
`;

const ControlBar = () => {
  return (
    <Wrapper>
      <Action icon="List" active={true} />
      <Action icon="Grid" active={false} />
      <Action icon="Heart" active={false} />
    </Wrapper>
  );
};

export default ControlBar;
