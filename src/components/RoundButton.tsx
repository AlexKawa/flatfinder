import React, { ReactChild } from "react";
import styled from "styled-components";

interface Props {
  children: ReactChild | ReactChild[];
  className?: string;
  onClick: () => void;
  active: boolean;
}

const Button = styled("button")<{ active: boolean }>`
  display: inline-block;
  cursor: pointer;
  outline: none;
  border-radius: 100px;
  white-space: nowrap;
  border: 1px solid
    ${(props) =>
      props.active ? props.theme.primary : props.theme.textTertiary};
  color: ${(props) =>
    props.active ? props.theme.primary : props.theme.medium};
  background-color: transparent;
  padding-left: 20px;
  padding-right: 20px;
  height: 32px;
  transition: border-color 0.5s ease, color 0.5s ease;

  &:hover {
    border-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.primary};
  }
`;

const RoundButton = ({ children, className, onClick, active }: Props) => {
  return (
    <Button className={className} onClick={onClick} active={active}>
      {children}
    </Button>
  );
};

RoundButton.defaultProps = {
  active: false,
};

export default RoundButton;
