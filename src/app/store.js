import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Featuers/Users/UserSlice";
import dataReducer from "../Featuers/Dataes/Data";

export default configureStore({
  reducer: {
    user: userReducer,
    data: dataReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});