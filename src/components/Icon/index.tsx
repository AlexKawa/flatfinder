import React from "react";
import styled from "styled-components";
import * as Icons from "./icons";

type Props = {
  name: string;
  className?: string;
  color: string;
  size: string;
};

interface ISizes {
  [index: string]: number;
}

const SIZES = {
  default: 22,
  large: 40,
} as ISizes;

const getIcon = (name: string) =>
  /* @ts-ignore:disable-next-line */
  Icons[name.charAt(0).toUpperCase() + name.slice(1)];

const Wrapper = styled("i")<{ color: string; size: string }>`
  display: inline-block;
  color: ${(props) => props.theme[props.color] || "inherit"};
  width: ${(props) => SIZES[props.size]}px;
  height: ${(props) => SIZES[props.size]}px;
  transtion: color 0.5s ease;

  & > svg {
    width: ${(props) => SIZES[props.size]}px;
    height: ${(props) => SIZES[props.size]}px;
    vertical-align: top;
    color: ${(props) => props.theme[props.color] || "inherit"};
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
