import { createSelector } from '@reduxjs/toolkit';
import selectTopStoriesRaw from './selectTopStoriesRaw';

export default createSelector(selectTopStoriesRaw, (topStories) => topStories.length);
