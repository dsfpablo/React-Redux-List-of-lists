import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const listsSlice = createSlice({
  name: "lists",
  initialState: [
    { id: "1", name: "Frutería", createdAt: new Date("2023-03-08").getTime() },
    {
      id: "2",
      name: "Verdulería",
      createdAt: new Date("2023-03-05").getTime(),
    },
    {
      id: "3",
      name: "Supermercado",
      createdAt: new Date("2023-02-18").getTime(),
    },
  ],
  reducers: {
    createList(state, action) {
      state.push({
        id: uuidv4(),
        name: action.payload,
        createdAt: Date.now(),
      });
    },
    removeList(state, action) {
      return state.filter((list) => list.id !== action.payload.id);
    },
  },
});

const { actions, reducer } = listsSlice;
export const { createList, removeList } = actions;
export default reducer;
