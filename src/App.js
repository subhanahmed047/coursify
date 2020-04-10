import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import PageNotFound from './components/common/PageNotFound';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursesPage} />
      <Route component={PageNotFound} />
    </Switch>
  </>
);

export default App;
