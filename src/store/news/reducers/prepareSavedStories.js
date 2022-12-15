export default (state) => {
  state.topStories = state.savedStories ?? [];
  state.visibleStories = {};
};
