export default (state, { payload }) => {
  state.topStories = payload;
  state.visibleStories = {};
};
