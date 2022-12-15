import { List } from '../components';
import { prepareSavedStories } from '../store/news/slice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Starred = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(prepareSavedStories());
  }, [dispatch]);

  return <List />;
};

export default Starred;
