import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header id="heading">
      <h1>Todo List</h1>
      <Link to="/" style={linkStyle}>
        Home{' '}
      </Link>
      |
      <Link to="/about" style={linkStyle}>
        {' '}
        About
      </Link>
    </header>
  );
}

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none'
}
