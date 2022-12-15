import { createListenerMiddleware } from '@reduxjs/toolkit';
import getTopStories from '../thunks/getTopStories';
import { selectTopStoriesCount, selectVisibleStoriesCount } from '../selectors';
import { prepareSavedStories, showMoreStories } from '../slice';

export const effect = (_, { dispatch, getState }) => {
  const state = getState();
  const visibleStoriesCount = selectVisibleStoriesCount(state);
  const topStoriesCount = selectTopStoriesCount(state);
  dispatch(showMoreStories({ visibleStoriesCount, topStoriesCount }));
};

export const predicate = (action, state) => {
  if (action.type !== getTopStories.fulfilled.type && action.type !== prepareSavedStories.type) {
    return false;
  }
  return selectVisibleStoriesCount(state) === 0;
};

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  predicate,
  effect
});

export default listenerMiddleware.middleware;
