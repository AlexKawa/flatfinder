import React from "react";
import styled from "styled-components";
import * as Icons from "./icons";

interface Props {
  name: string;
  className?: string;
  color: string;
  size: string;
}

type Sizes = {
  [index: string]: number;
};

const SIZES = {
  default: 22,
  medium: 30,
  large: 40,
} as Sizes;

const getIcon = (name: string) =>
  // TODO Find solution
  /* @ts-ignore:disable-next-line  */
  Icons[name.charAt(0).toUpperCase() + name.slice(1)];

const Wrapper = styled("i")<{ color: string; size: string }>`
  display: inline-block;
  color: ${(props) => props.theme[props.color] || props.color || "inherit"};
  width: ${(props) => SIZES[props.size]}px;
  height: ${(props) => SIZES[props.size]}px;
  transition: color 0.5s ease;

  & > svg {
    width: ${(props) => SIZES[props.size]}px;
    height: ${(props) => SIZES[props.size]}px;
    vertical-align: top;
    color: ${(props) => props.theme[props.color] || props.color || "inherit"};
  }
`;

const Icon = ({ className, name, color, size }: Props) => {
  const IconSvg = getIcon(name);
  if (!IconSvg) {
    throw new Error(`'${name}' icon is missing.`);
  }

  return (
    <Wrapper className={className} color={color} size={size}>
      <IconSvg />
    </Wrapper>
  );
};

Icon.defaultProps = {
  className: "",
  color: "primary",
  size: "default",
};

export default Icon;
