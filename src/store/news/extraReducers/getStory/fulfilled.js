export default (state, { payload }) => {
  state.visibleStories[payload.id] = payload;
  state.storiesToFetch = state.storiesToFetch.filter((s) => s !== payload.id);
};
