import React from "react";
import { ThemeProvider } from "styled-components";
import { withRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";

import de from "locales/de";
import routes from "routes";
import { store } from "store/store";
import theme from "utils/getTheme";
import { flattenMessages } from "utils/common";

import Flatfinder from "components/Flatfinder";

const App = () => (
  <Provider store={store}>
    <IntlProvider locale="de" messages={flattenMessages(de)}>
      <ThemeProvider theme={theme}>
        <Route path={routes.object} component={Flatfinder} />
      </ThemeProvider>
    </IntlProvider>
  </Provider>
);

export default withRouter(App);
