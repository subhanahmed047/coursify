import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button } from 'antd';

import Wrapper from '../common/Wrapper';

const { Content } = Layout;

const AboutPage = () => (
  <Content>
    <Wrapper>
      <h1>About</h1>
      <p>
        Jobsy is a community for developers around the world, where great minds
        can interact and find their next roles.
      </p>
      <Button>
        <Link to="/">Go Back To Home Page</Link>
      </Button>
    </Wrapper>
  </Content>
);

export default AboutPage;
