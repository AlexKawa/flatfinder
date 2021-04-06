import { configureStore } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";

import appReducer from "store/appSlice";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const store = configureStore({
  reducer: {
    router: connectRouter(history),
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
