import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import Home from './components/pages/Home';
import Meals from './components/pages/Meals';
import Diets from './components/pages/Diets';
import Cuisines from './components/pages/Cuisines';
import Recipes from './components/pages/Recipes';
import Navbar from './components/Navbar';
import theme from './components/styles/theme';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isDark, setIsDark] = useState(false);

  function toggleIsDark() {
    setIsDark(!isDark);
  }

  // TODO
  // 1- Fix text intend in search box.
  // 2- Update 404 page.

  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={isDark ? theme.darkTheme : theme.lightTheme}>
        <Helmet>
          <meta name='theme-color' content={isDark ? '#161819' : '#ffffff'} />
        </Helmet>
        <GlobalStyles />
        <Navbar toggleIsDark={toggleIsDark} isDark={isDark} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/meals' element={<Meals />} />
          <Route path='/diets' element={<Diets />} />
          <Route path='/cuisines' element={<Cuisines />} />
          <Route path='/recipes/:id' element={<Recipes />} />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
