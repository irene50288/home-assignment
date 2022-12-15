import { useDispatch, useSelector } from 'react-redux';
import {
  selectTopStoriesCount,
  selectVisibleStoriesCount,
  selectVisibleStoriesKeys
} from '../store/news/selectors';
import Story from './Story';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useCallback } from 'react';
import { showMoreStories } from '../store/news/slice';

const ListEl = styled('ol')(({ theme }) => ({
  color: theme.palette.primary
}));

const ListItemEl = styled('li')(({ theme }) => ({
  marginBottom: '26px',
  '&::marker': {
    color: theme.palette.primary.light,
    fontFamily: 'Ubuntu Mono',
    fontWeight: 400,
    fontSize: '18px'
  }
}));

const Empty = styled('div')(({ theme }) => ({
  marginBottom: '26px',
  color: theme.palette.primary.light,
  fontFamily: 'Ubuntu Mono',
  fontWeight: 400,
  fontSize: '18px'
}));

const List = () => {
  const stories = useSelector(selectVisibleStoriesKeys);
  const topStoriesCount = useSelector(selectTopStoriesCount);
  const visibleStoriesCount = useSelector(selectVisibleStoriesCount);
  const dispatch = useDispatch();

  const handleShowMore = useCallback(() => {
    dispatch(showMoreStories({ visibleStoriesCount, topStoriesCount }));
  }, [dispatch, visibleStoriesCount, topStoriesCount]);

  if (!stories.length) return <Empty>No stories to display</Empty>;

  return (
    <>
      <ListEl>
        {stories.map((story) => (
          <ListItemEl key={story}>
            <Story id={story} />
          </ListItemEl>
        ))}
      </ListEl>
      {visibleStoriesCount < topStoriesCount && (
        <Button variant="contained" onClick={handleShowMore}>
          show more
        </Button>
      )}
    </>
  );
};

export default List;
