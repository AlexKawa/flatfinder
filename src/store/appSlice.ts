import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface IState {
  favoriteUnits: string[];
}

const initialState: IState = {
  favoriteUnits: [],
};

export const slice = createSlice({
  name: "root",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      if (state.favoriteUnits.includes(action.payload)) {
        state.favoriteUnits = state.favoriteUnits.filter(
          (unitId) => unitId !== action.payload
        );
      } else {
        state.favoriteUnits = [...state.favoriteUnits, action.payload];
      }
    },
  },
});

export const { toggleFavorite } = slice.actions;

export const getFavorites = (state: RootState) => state.app.favoriteUnits;

export default slice.reducer;
