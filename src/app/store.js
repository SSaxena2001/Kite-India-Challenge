import { configureStore } from "@reduxjs/toolkit";

import { factsApi } from "../services";

export default configureStore({
  reducer: {
    [factsApi.reducerPath]: factsApi.reducer,
  },
});
