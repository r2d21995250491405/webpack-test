import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { currencyApi } from "../../shared/services/api/currency/currencyApi";

const rootReducer = combineReducers({
  [currencyApi.reducerPath]: currencyApi.reducer,
});

export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) =>
      getDefaultMiddleWare().concat(currencyApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore["dispatch"];
