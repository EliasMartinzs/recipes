import { combineReducers } from "@reduxjs/toolkit";

import { recipeReducer } from "./recipes/recipeSlice";

export const rootReducer = combineReducers({
  recipe: recipeReducer,
});
