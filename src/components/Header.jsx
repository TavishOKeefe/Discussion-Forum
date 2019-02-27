
import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  return (
    <div>
      <h1>Discussion Forum</h1>
      <Link to="/">Home</Link> | <Link to="/post-form">New Post</Link>
    </div>
  );
}

export default Header;
