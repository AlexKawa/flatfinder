import React, { useState } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import SquareButton from "../SquareButton";
import RoundButton from "../RoundButton";

const FILTERS = ["rooms", "price", "type", "surface", "availability"];

const Wrapper = styled.div`
  position: absolute;
  transform: translateY(-100%);
  display: flex;
  width: 100%;
  top: -10px;
`;

const Control = styled(SquareButton)`
  &:not(:first-child) {
    margin-left: 10px;
  }
`;

const FilterWrapper = styled.div`
  position: absolute;
  display: flex;
  overflow: hidden;

  transform: translateX(100%);
  right: -10px;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const Filters = styled("div")<{ expanded: boolean }>`
  align-items: center;
  display: ${(props) => (props.expanded ? "flex" : "none")};
  transform: translateX(${(props) => (props.expanded ? "0" : "-100%")});
  transition: transform 0.5s ease;
`;

const FilterAction = styled(RoundButton)`
  align-self: center;

  &:not(:first-child) {
    margin-left: 10px;
  }
`;

const ControlBar = () => {
  const [areFiltersExpanded, setFiltersExpanded] = useState(true);

  return (
    <Wrapper>
      <Control icon="List" active={true} />
      <Control icon="Grid" active={false} />
      <Control icon="Heart" active={false} />

      <FilterWrapper>
        <Filters expanded={areFiltersExpanded}>
          {FILTERS.map((filter) => (
            <FilterAction key={filter} onClick={() => {}} active={true}>
              <FormattedMessage id={`attributes.${filter}`} />
            </FilterAction>
          ))}
        </Filters>
        <FilterAction
          onClick={() => setFiltersExpanded((prevState) => !prevState)}
          active={!areFiltersExpanded}
        >
          <FormattedMessage
            id={`menu.${areFiltersExpanded ? "hide" : "filters"}`}
          />
        </FilterAction>
      </FilterWrapper>
    </Wrapper>
  );
};

export default ControlBar;
