import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
const { Header } = Layout;

const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
`;

const AppHeader = () => {
  return (
    <Header>
      <Logo />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <NavLink to="/" activeClassName="selected" exact>
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="about" activeClassName="selected">
            About
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="courses" activeClassName="selected">
            Courses
          </NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
