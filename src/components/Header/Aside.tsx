import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import RoundButton from "components/RoundButton";
import Icon from "components/Icon";

const Wrapper = styled.aside`
  height: 100%;
  padding: 30px 0;
  display: none;
  flex-direction: column;
  float: right;
  margin-right: 10px;

  @media (${(props) => props.theme.tabletScreen}) {
    display: flex;
  }
`;

const Info = styled.p`
  color: ${(props) => props.theme.textMedium};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: ${(props) => props.theme.fontSizes.tiny};
  font-weight: 500;
  margin: 0;
  margin-bottom: 10px;
  text-align: right;
`;

const Actions = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
`;

const Action = styled(RoundButton)`
  background-color: ${(props) => props.theme.colorDifference};
  color: ${(props) => props.theme.light};
  font-family: "Montserrat";
  font-weight: 500;
  letter-spacing: 0.06em;
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: 18px;
  border: none;
  display: flex;
  align-items: center;
  margin-left: 10px;
  & > i {
    margin-left: 20px;
  }
`;

const Aside = () => (
  <Wrapper>
    <Info>
      <FormattedMessage id={`menu.projectBy`} />
    </Info>
    <Info>
      <FormattedMessage id={`menu.presentedBy`} />
    </Info>
    <Actions>
      <Action onClick={() => {}}>
        <FormattedMessage id={`menu.contact`} />
        <Icon name="Post" />
      </Action>
      <Action onClick={() => {}}>EN</Action>
    </Actions>
  </Wrapper>
);

export default Aside;
