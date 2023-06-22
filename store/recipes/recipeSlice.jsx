import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  recipeItems: [],
  query: "",
  favorites: [],
};

const favoritesItems = (favoritesItem, favoritesToAdd) => {
  const existingItem = favoritesItem.find(
    (item) => item.title === favoritesToAdd.title
  );

  if (existingItem) {
    return favoritesItem.map((item) => item.title === favoritesToAdd.title)
      ? { ...favoritesItem, quantity: item.quantity + 1 }
      : favoritesItem;
  }

  return [...favoritesItem, { ...favoritesToAdd, quantity: 1 }];
};

const favoritesItemsRemove = (favoritesItem, favoritesRemove) => {
  const existingItem = favoritesItem.find(
    (item) => item.title === favoritesRemove.title
  );

  if (existingItem.quantity === 1) {
    return favoritesItem.filter((item) => item.title !== favoritesRemove.title);
  }

  return favoritesItem.map((item) => item.title === favoritesRemove.title)
    ? { ...favoritesItem, quantity: item.quantity - 1 }
    : favoritesItem;
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
      state.favorites = favoritesItems(state.favorites, action.payload);
    },
    favoritesRemove(state, action) {
      state.favorites = favoritesItemsRemove(state.favorites, action.payload);
    },
  },
});

export const { recipeAdd, queryAdd, favoritesAdd, favoritesRemove } =
  recipeSlice.actions;
export const recipeReducer = recipeSlice.reducer;
