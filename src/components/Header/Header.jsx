import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavContainer, RouteLink, TopBar } from './Header.styled';

export const Header = () => {
  return (
    <>
      <TopBar>
        <NavContainer>
          <RouteLink to={'/'}>Home</RouteLink>
          <RouteLink to={'/movies'}>Movie</RouteLink>
        </NavContainer>
      </TopBar>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
