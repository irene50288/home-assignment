export default (state, { payload }) => {
  state.savedStories.push(payload);
};
