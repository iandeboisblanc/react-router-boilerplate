import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <div>
      NavBar:
      <Link to={'/projects'}> Projects </Link> 
      <Link to={'/'}> About </Link> 
    </div>
  )
}

module.exports = NavBar;
