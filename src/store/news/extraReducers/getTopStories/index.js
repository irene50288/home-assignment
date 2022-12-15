import fulfilled from './fulfilled';
import getTopStories from '../../thunks/getTopStories';

export default {
  [getTopStories.fulfilled]: fulfilled
};
