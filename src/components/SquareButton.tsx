import React from "react";
import styled from "styled-components";

import Icon from "./Icon";

interface Props {
  className?: string;
  icon: string;
  active: boolean;
}

const Button = styled("button")<{ active: boolean }>`
  flex: 1;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  transition: background-color 0.5s ease;
  border-radius: 5%;
  height: 60px;

  &: hover {
    background-color: ${(props) => props.theme.colorDifference};

    & > i  {
      color: ${(props) => props.theme.primary};

      & > svg {
        color: ${(props) => props.theme.primary};
      }
    }
  }

  ${({ active, theme }) =>
    active &&
    `
        background-color: ${theme.colorDifference};
        
        & > i  {
        color: ${theme.primary};

            & > svg {
            color: ${theme.primary};
            }
        }
    `}
`;

const SquareButton = ({ className, icon, active }: Props) => (
  <Button className={className} active={active}>
    <Icon name={icon} color="medium" size="large" />
  </Button>
);

export default SquareButton;
