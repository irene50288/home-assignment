import { configureStore } from '@reduxjs/toolkit';
import { news, newsListeners } from './news';

export default configureStore({
  reducer: {
    news: news.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(...newsListeners)
});
