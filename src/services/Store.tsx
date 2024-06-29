import { configureStore } from "@reduxjs/toolkit";
import { PostSlice } from "./api/PostSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { UserSlice } from "./api/UserSlice";
import { MobileSlice } from "./MobileSlice";

export const Store = configureStore({
  reducer: {
    [PostSlice.reducerPath]: PostSlice.reducer,
    [UserSlice.reducerPath]: UserSlice.reducer,
    mobile: MobileSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(PostSlice.middleware)
      .concat(UserSlice.middleware),
});
setupListeners(Store.dispatch);
