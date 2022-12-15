export default (state) => {
  const savedStoriesFromLocalStorage = JSON.parse(localStorage.getItem('savedStories'));
  state.savedStories = savedStoriesFromLocalStorage ?? [];
};
