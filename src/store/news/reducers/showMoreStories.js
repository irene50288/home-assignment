const pageSize = 12;

export default (state, { payload: { visibleStoriesCount, topStoriesCount } }) => {
  const diff = topStoriesCount - visibleStoriesCount;
  if (diff <= 0) return;
  const amountToAdd = diff < pageSize ? diff : pageSize;
  const storiesToFetch = [];
  for (let i = visibleStoriesCount; i < visibleStoriesCount + amountToAdd; i++) {
    storiesToFetch.push(state.topStories[i]);
  }
  state.storiesToFetch = storiesToFetch;
};
