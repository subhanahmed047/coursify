import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

const App = () => (
  <>
    <Header />
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
  </>
);

export default App;
