import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
  name: 'cardsSlice',
  initialState: {
    cards: {},
  },
  reducers: {
    addCard: (state, {payload}) => {
      state.cards[payload.id] = payload;
    },
  },
});

export const cardsReducer = cardsSlice.reducer;
export const addCard = cardsSlice.actions.addCard;
export const selectCards = state => {
  return state.cards.cards;
};
export const selectCardById = id => state => {
  return state.cards.cards[id];
};
