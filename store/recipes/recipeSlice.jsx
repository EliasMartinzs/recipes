import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  favoritesItems: [],
  recipeItems: [],
  query: "",
};

const addFavoriteItem = (state, payload) => {
  const existing = state.find((item) => item.title === payload.title);

  if (existing) {
    return state.map((item) =>
      item.title === payload.title ? { ...state } : payload
    );
  }

  return [...state, { ...payload }];
};

const removeFavoriteItem = (state, payload) => {
  const existing = state.find((item) => item.title === payload.title);

  if (existing) {
    return state.filter((item) => item.title !== payload.title);
  }
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
    favoritesAdd(state, action) {
      state.favoritesItems = addFavoriteItem(
        state.favoritesItems,
        action.payload
      );
    },
    favoritesRemove(state, action) {
      state.favoritesItems = removeFavoriteItem(
        state.favoritesItems,
        action.payload
      );
    },
  },
});

export const { recipeAdd, queryAdd, favoritesAdd, favoritesRemove } =
  recipeSlice.actions;
export const recipeReducer = recipeSlice.reducer;
