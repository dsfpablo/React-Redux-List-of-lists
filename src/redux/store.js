import { configureStore } from "@reduxjs/toolkit";
import listsReducer from "./listsSlice";
import itemsListReducer from "./itemsListSlice";

const store = configureStore({
  reducer: {
    lists: listsReducer,
    itemsList: itemsListReducer,
  },
});

export default store;
