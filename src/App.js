import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import AppHeader from './components/common/AppHeader';
import PageNotFound from './components/common/PageNotFound';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';

const App = () => (
  <Layout>
    <AppHeader />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursesPage} />
      <Route component={PageNotFound} />
    </Switch>
  </Layout>
);

export default App;
