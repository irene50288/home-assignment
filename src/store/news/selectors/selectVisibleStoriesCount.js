import { createSelector } from '@reduxjs/toolkit';
import selectVisibleStoriesKeys from './selectVisibleStoriesKeys';

export default createSelector(
  selectVisibleStoriesKeys,
  (visibleStoriesKeys) => visibleStoriesKeys.length
);
