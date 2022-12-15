import { createListenerMiddleware } from '@reduxjs/toolkit';
import { selectStoriesToFetch } from '../selectors';
import { getStory } from '../thunks';
import { showMoreStories } from '../slice';

export const effect = (action, { dispatch, getState }) => {
  const state = getState();
  const storiesToFetch = selectStoriesToFetch(state);
  storiesToFetch.forEach((id) => dispatch(getStory(id)));
};

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: showMoreStories,
  effect
});

export default listenerMiddleware.middleware;
