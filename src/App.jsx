import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Container } from 'reactstrap';
import { mainSubject } from './streams/main';
import { Home } from './views/Home';
import { Profile } from './views/Profile';

export function App() {
  const location = useLocation();

  useEffect(() => {
    mainSubject.next(location);
  }, [location]);

  return (
    <Container fluid>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/:id/:tab" element={<Profile />} />
      </Routes>
    </Container>
  );
}
