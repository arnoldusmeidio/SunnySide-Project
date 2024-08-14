import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export interface User {
  user: {
    users: {
      name: {
        last: string;
      };
      picture: {
        large: string;
      };
    }[];
  };
}
