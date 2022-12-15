import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

const Wrapper = styled('div')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: 'Ubuntu Mono',
  fontWeight: 400,
  fontSize: '14px',
  textDecoration: 'none',
  lineHeight: '33px',
  padding: '0 0 50px',
  '& a': {
    color: '#FE7139'
  }
}));

const StoryDetails = () => {
  const { id } = useParams();

  return (
    <Wrapper>
      This page is not yet ready. To see the story details visit{' '}
      <a href={`https://news.ycombinator.com/item?id=${id}`} target="_blank" rel="noreferrer">
        this page
      </a>{' '}
      (opens in a new tab)
    </Wrapper>
  );
};

export default StoryDetails;
