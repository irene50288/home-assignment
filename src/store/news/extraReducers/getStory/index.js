import fulfilled from './fulfilled';
import getStory from '../../thunks/getStory';

export default {
  [getStory.fulfilled]: fulfilled
};
