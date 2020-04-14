import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button } from 'antd';

import Wrapper from '../common/Wrapper';

const { Content } = Layout;

const HomePage = () => (
  <Content>
    <Wrapper>
      <h1>Welcome to Coursify</h1>
      <p>
        A place for developers to Learn, Improve, and Evolve on daily basis.
      </p>
      <div>
        <Button>
          <Link to="about">Learn More</Link>
        </Button>
        <Button type="primary" style={{ marginLeft: 5 }}>
          <Link to="courses">Checkout Courses</Link>
        </Button>
      </div>
    </Wrapper>
  </Content>
);

export default HomePage;
