import React, { ReactChild } from "react";
import styled from "styled-components";

type Props = {
  children: ReactChild | ReactChild[];
  className?: string;
};

const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  outline: none;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primary};
  background-color: transparent;
  padding-left: 20px;
  padding-right: 20px;
  height: 32px;
`;

const RoundButton = ({ children, className }: Props) => {
  return <Button className={className}>{children}</Button>;
};

export default RoundButton;
