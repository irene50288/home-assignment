import { List } from '../components';
import { useEffect } from 'react';
import { getTopStories } from '../store/news/thunks';
import { useDispatch } from 'react-redux';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopStories());
  }, [dispatch]);

  return <List />;
};

export default Main;
