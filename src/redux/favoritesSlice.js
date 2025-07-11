import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const recipe = action.payload;
      console.log("Toggling favorite for recipe:", recipe);
      const existingIndex = state.favoriterecipes.findIndex(
        (favrecipe) => favrecipe.idFood === recipe.idFood
      );
        console.log("Existing index:", existingIndex)

      if (existingIndex >= 0) {
        // If the recipe is already in favorites, remove it
        state.favoriterecipes.splice(existingIndex, 1);
      } else {
        // If the recipe is not in favorites, add it
        state.favoriterecipes.push(recipe);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
