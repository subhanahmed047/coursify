import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button } from 'antd';

import Wrapper from '../common/Wrapper';

const { Content } = Layout;

const HomePage = () => (
  <Content>
    <Wrapper>
      <h1>Welcome to Jobsy</h1>
      <p>A place for developers to find their next big role</p>
      <Button>
        <Link to="about">Learn More</Link>
      </Button>
    </Wrapper>
  </Content>
);

export default HomePage;
