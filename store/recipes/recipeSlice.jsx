import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  recipeItems: [],
  query: "",
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState: INITIAL_STATE,
  reducers: {
    recipeAdd(state, action) {
      state.recipeItems = action.payload;
    },
    queryAdd(state, action) {
      state.query = action.payload;
    },
  },
});

export const { recipeAdd, queryAdd } = recipeSlice.actions;
export const recipeReducer = recipeSlice.reducer;
