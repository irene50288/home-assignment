import { createListenerMiddleware } from '@reduxjs/toolkit';
import { saveStory } from '../slice';
import { selectSavedStories } from '../selectors';

const effect = (action, { getState }) => {
  const state = getState();
  const savedStories = selectSavedStories(state);
  localStorage.setItem('savedStories', JSON.stringify(savedStories));
};

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: saveStory,
  effect
});

export default listenerMiddleware.middleware;
