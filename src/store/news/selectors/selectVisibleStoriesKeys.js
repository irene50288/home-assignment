import { createSelector } from '@reduxjs/toolkit';
import selectVisibleStoriesRaw from './selectVisibleStoriesRaw';
import selectTopStoriesRaw from './selectTopStoriesRaw';

// to maintain the order, we need to return ids from topStories

export default createSelector(
  selectVisibleStoriesRaw,
  selectTopStoriesRaw,
  (visibleStories, topStories) => topStories.slice(0, Object.keys(visibleStories).length)
);
