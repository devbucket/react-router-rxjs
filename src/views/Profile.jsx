import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { useProfile } from '../api/Profile';

export function Profile() {
  const { tab } = useParams();
  const loading = useProfile((state) => state.loading);

  if (loading) {
    return (
      <Spinner>
        Loading ...
      </Spinner>
    );
  }

  return (
    <>
      <h1>Profile</h1>
      <p>Displaying the profile details</p>
      <p>
        <NavLink to="/">
          Home
        </NavLink>
      </p>
      {tab === 'timeline' && (
        <p>
          <NavLink to="/profile/123abc">
            Overview
          </NavLink>
        </p>
      )}
      {!tab && (
        <p>
          <NavLink to="/profile/123abc/timeline">
            Timeline
          </NavLink>
        </p>
      )}
    </>
  );
}
