import { configureStore } from "@reduxjs/toolkit";
import { userProfileReducers } from "./Reducer";

export function makeStore() {
  return configureStore({
    reducer: {
      userProfile: userProfileReducers,
    },
  });
}

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;