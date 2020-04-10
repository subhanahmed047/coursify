import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: '#F15B2A' };
  return (
    <>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {' | '}
      <NavLink to="about" activeStyle={activeStyle}>
        About
      </NavLink>
      {' | '}
      <NavLink to="courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
    </>
  );
};

export default Header;
