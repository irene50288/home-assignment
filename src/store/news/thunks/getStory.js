import { createAsyncThunk } from '@reduxjs/toolkit';

const getStory = createAsyncThunk('news/getStory', async (id) => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  if (response.status !== 200) {
    throw new Error('Unable to fetch story');
  }
  const data = await response.json();
  return data;
});

export default getStory;
