import { createSelector } from '@reduxjs/toolkit';
import selectNewsRaw from './selectNewsRaw';

export default createSelector(selectNewsRaw, (news) => news?.topStories ?? []);
