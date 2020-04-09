import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Welcome to Jobsy</h1>
    <p>A place for developers to find their next big role</p>
    <Link to="about">Learn More</Link>
  </div>
);

export default HomePage;
