import styled from '@emotion/styled';
import Nav from './Nav';

const Wrapper = styled.div`
  border-top: 2px solid #ff6600;
  padding: 27px 0;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled('h1')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: 'Open Sans',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '22px',
  margin: '0 0 6px'
}));

const Footer = () => {
  return (
    <Wrapper>
      <Logo>Hacker News</Logo>
      <Nav />
    </Wrapper>
  );
};

export default Footer;
