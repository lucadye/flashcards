import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
  name: 'topicsSlice',
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, {payload}) => {
      state.topics[payload.id] = {
        ...payload,
        quizIds: [],
      };
    },
    addQuizId: (state, {payload}) => {
      state.topics[payload.topicId].quizIds.push(payload.id);
    },
  },
});

export const topicsReducer = topicsSlice.reducer;
export const addTopic = topicsSlice.actions.addTopic;
export const addQuizId = topicsSlice.actions.addQuizId;
export const selectTopics = state => {
  return state.topics.topics;
};
