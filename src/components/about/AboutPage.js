import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => (
  <div>
    <h1>About</h1>
    <p>
      Jobsy is a community for developers around the world, where great minds
      can interact and find their next roles.
    </p>
    <Link to="/">Go Back To Home Page</Link>
  </div>
);

export default AboutPage;
