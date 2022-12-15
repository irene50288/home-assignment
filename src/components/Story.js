import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleStories } from '../store/news/selectors';
import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useCallback } from 'react';
import { saveStory } from '../store/news/slice';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Title = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '18px',
  lineHeight: '18px',
  fontWeight: 700,
  marginBottom: '9px',
  textDecoration: 'none'
}));

const Text = styled('div')(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: '10px',
  fontWeight: 400,
  fontFamily: 'Open Sans',
  lineHeight: '14px'
}));

const SaveButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: '10px',
  fontWeight: 400,
  fontFamily: 'Open Sans',
  lineHeight: '14px',
  padding: 0,
  '&:hover': {
    background: 'none'
  }
}));

const SavedIcon = styled(StarIcon)`
  color: #fe7139;
  font-size: 10px;
  margin-right: 3px;
`;

const SaveIcon = styled(StarOutlineIcon)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: '10px',
  marginRight: '3px'
}));

const ExternalLink = styled('a')(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: '10px',
  fontWeight: 400,
  fontFamily: 'Open Sans',
  lineHeight: '10px',
  marginLeft: '12px'
}));

const Story = ({ id }) => {
  const {
    title,
    kids: comments,
    score,
    by,
    saved,
    url,
    time
  } = useSelector(selectVisibleStories)[id] ?? {};
  const dispatch = useDispatch();

  const onSaveStory = useCallback(() => {
    dispatch(saveStory(id));
  }, [dispatch, id]);

  return (
    <div>
      <Title to={`/story/${id}`}>{title}</Title>
      <ExternalLink href={url} target="_blank" rel="noreferrer">
        ({url?.split('/')[2]})
      </ExternalLink>
      <Text>
        {`${score} points by ${by} ${moment.unix(time).fromNow()} | ${comments?.length} comments`} |{' '}
        <SaveButton onClick={onSaveStory}>
          {saved ? (
            <>
              <SavedIcon /> saved
            </>
          ) : (
            <>
              <SaveIcon /> save
            </>
          )}
        </SaveButton>
      </Text>
    </div>
  );
};

Story.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default Story;
