import { createSlice } from '@reduxjs/toolkit';

export const quizzesSlice = createSlice({
  name: 'quizzesSlice',
  initialState: {
    quizzes: {},
  },
  reducers: {
    addQuiz: (state, {payload}) => {
      state.quizzes[payload.id] = payload;
    },
  },
});

export const quizzesReducer = quizzesSlice.reducer;
export const addQuiz = quizzesSlice.actions.addQuiz;
export const selectQuizzes = state => {
  return state.quizzes.quizzes;
};
