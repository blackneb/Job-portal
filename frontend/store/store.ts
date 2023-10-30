import { configureStore } from "@reduxjs/toolkit";
import { userProfileReducers, userAuthReducers } from "./Reducer";

export function makeStore() {
  return configureStore({
    reducer: {
      userProfile: userProfileReducers,
      userAuth:userAuthReducers,
    },
  });
}

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;