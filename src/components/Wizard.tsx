import React, { useState } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import RoundButton from "./RoundButton";
import Icon from "./Icon";

const Wrapper = styled("div")<{ visible: boolean }>`
  background-color: ${(props) => props.theme.backgroundSecondary};
  border-radius: 10px;
  padding: 45px 20px;
  position: absolute;
  max-width: 315px;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.5s ease;
`;

const Close = styled(RoundButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 40px;
  width: 40px;
  padding: 0;
  border-color: ${(props) => props.theme.medium};
`;

const Headline = styled.h5`
  color: ${(props) => props.theme.secondary};
  font-size: 24px;
  line-height: 29px;
  font-weight: 400;
  letter-spacing: 0.02em;
  margin: 0;
  max-width: 200px;
`;

const SubTitle = styled.span`
  color: ${(props) => props.theme.textMedium};
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  margin-top: 10px;
  letter-spacing: 0.06em;
`;

const Action = styled(RoundButton)`
  margin-top: 30px;
  width: 70%;
  max-width: 175px;
`;

const Wizard = () => {
  const [isWizardOpen, setWizardOpen] = useState(true);

  return (
    <Wrapper visible={isWizardOpen}>
      <Close onClick={() => setWizardOpen(false)}>
        <Icon name="Close" color="secondary" />
      </Close>
      <Headline>
        <FormattedMessage id={`wizard.welcome`} />
      </Headline>
      <SubTitle>
        <FormattedMessage id={`wizard.help`} />
      </SubTitle>
      <Action onClick={() => {}} active>
        Wohnfläche
      </Action>
      <Action onClick={() => {}} active>
        Anzahl Räume
      </Action>
    </Wrapper>
  );
};

export default Wizard;
