import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const itemsListSlice = createSlice({
  name: "itemsList",
  initialState: [{ id: "1", listId: "1", checked: false, name: "Frutilla" }],
  reducers: {
    createItem(state, action) {
      state.push({
        id: uuidv4(),
        listId: action.payload.listId,
        checked: false,
        name: action.payload.name,
      });
    },
    checkItem(state, action) {
      const item = state.find((item) => item.id === action.payload.itemId);
      const index = state.indexOf(item);
      state[index].checked = action.payload.checked;
      return state;
    },
    removeItem(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    removeItemsInList(state, action) {
      return state.filter((item) => item.listId !== action.payload.listId);
    },
  },
});

const { actions, reducer } = itemsListSlice;
export const { createItem, checkItem, removeItem, removeItemsInList } = actions;
export default reducer;
