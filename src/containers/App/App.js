import './App.css';
import Main from '../Main';
import Starred from '../Starred';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Footer } from '../../components';
import '@fontsource/ubuntu-mono/400.css';
import '@fontsource/ubuntu-mono/700.css';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useMemo, useState } from 'react';
import getThemeSetup from '../../theme';
import Container from './Container';
import ColorModeContext from './ColorModeContext';
import StoryDetails from '../StoryDetails';
import { useDispatch } from 'react-redux';
import { loadSavedStories } from '../../store/news/slice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSavedStories());
  }, [dispatch]);

  return (
    <Container>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/story/:id" element={<StoryDetails />} />
        </Routes>
        <Footer />
      </Router>
    </Container>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );

  const theme = useMemo(() => createTheme(getThemeSetup(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
