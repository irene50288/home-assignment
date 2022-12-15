import { createSelector } from '@reduxjs/toolkit';
import selectStoriesToFetch from './selectStoriesToFetch';

export default createSelector(selectStoriesToFetch, (storiesToFetch) => storiesToFetch.length);
