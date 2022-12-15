import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const Link = styled(NavLink)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: 'Open Sans',
  fontWeight: 400,
  fontSize: '14px',
  textDecoration: 'none',
  lineHeight: '33px',
  '&.active': {
    color: '#FE7139',
    fontWeight: 800
  }
}));

const Wrapper = styled('div')(({ theme }) => ({
  color: theme.palette.primary.main
}));

const Nav = () => {
  return (
    <Wrapper>
      <Link to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        latest
      </Link>{' '}
      |{' '}
      <Link to="/starred" className={({ isActive }) => (isActive ? 'active' : '')}>
        starred
      </Link>
    </Wrapper>
  );
};

export default Nav;
