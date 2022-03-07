import React from 'react';
import { NavLink } from 'react-router-dom';

export function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        This is an example home page.
      </p>
      <NavLink to="/profile/123abc">
        Profile
      </NavLink>
    </>
  );
}
