import { createAsyncThunk } from '@reduxjs/toolkit';

const getTopStories = createAsyncThunk('news/getTopStories', async () => {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
  if (response.status !== 200) {
    throw new Error('Unable to fetch top stories');
  }
  const data = await response.json();
  return data;
});

export default getTopStories;
