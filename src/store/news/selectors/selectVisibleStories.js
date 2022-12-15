import { createSelector } from '@reduxjs/toolkit';
import selectVisibleStoriesRaw from './selectVisibleStoriesRaw';
import selectSavedStories from './selectSavedStories';

export default createSelector(
  selectVisibleStoriesRaw,
  selectSavedStories,
  (stories, savedStories) => {
    if (savedStories.length === 0) {
      return stories;
    }
    const savedStoriesSet = new Set(savedStories);
    return Object.fromEntries(
      Object.entries(stories).map(([id, story]) => [
        id,
        { ...story, saved: savedStoriesSet.has(id) }
      ])
    );
  }
);
