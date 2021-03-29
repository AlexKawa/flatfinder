import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./utils/getTheme";
import { IntlProvider } from "react-intl";
import { flattenMessages } from "./utils/common";
import de from "./locales/de";
import backgroundImg from "./assets/landing-page.png";

import HeaderBar from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Wizard from "./components/Wizard";

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  background-color: ${(props) => props.theme.background};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-bottom: 35px;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  padding-right: 10px;
`;

const Background = styled.div`
  position: relative;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex: 1;
  width: 100%;
  border-radius: 10px;
`;

const Controls = styled.section`
  background-color: ${(props) => props.theme.backgroundSecondary};
  height: 60px;

  @media (${(props) => props.theme.tabletScreen}) {
    display: none;
  }
`;

const App = () => {
  return (
    <IntlProvider locale="de" messages={flattenMessages(de)}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <HeaderBar />
          <Content>
            <Sidebar />
            <Background>
              <Wizard />
            </Background>
          </Content>
          <Controls />
        </Wrapper>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
