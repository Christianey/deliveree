import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, { payload }) => {
      state.items = [...state.items, payload];
    },
    removeFromBasket: (state, { payload }) => {
      const index = state.items.findIndex((item) => item.id === payload.id);
      state.items.splice(index, 1);
    },
  },
});

export const selectBasketItems = (state) => state.basket.items;
export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
