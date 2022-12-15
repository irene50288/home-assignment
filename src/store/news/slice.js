import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import extraReducers from './extraReducers';
import * as reducers from './reducers';

const slice = createSlice({
  name: 'news',
  initialState,
  reducers,
  extraReducers
});

export default slice;

export const { showMoreStories, saveStory, loadSavedStories, prepareSavedStories } = slice.actions;
