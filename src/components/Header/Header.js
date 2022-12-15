import { LightMode, Brightness3 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import ColorModeContext from '../../containers/App/ColorModeContext';
import Wrapper from './styledHeader';
import Logo from './Logo';
import SwitchModeButton from './SwitchModeButton';
import Nav from '../../components/Nav';

const Header = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Wrapper>
      <Logo>Hacker News</Logo>
      <Nav />
      <SwitchModeButton
        sx={{ ml: 1, position: 'absolute', right: 0, top: '42px' }}
        onClick={colorMode.toggleColorMode}
        color="inherit">
        {theme.palette.mode === 'dark' ? <LightMode /> : <Brightness3 />}
      </SwitchModeButton>
    </Wrapper>
  );
};

export default Header;
