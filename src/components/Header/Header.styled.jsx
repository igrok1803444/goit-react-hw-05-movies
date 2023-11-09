import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const TopBar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #4fa94d;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const NavContainer = styled.nav`
  display: flex;
  gap: 24px;

  margin: 0 auto;
`;
export const RouteLink = styled(NavLink)`
  display: block;
  padding: 12px 8px;
  border: 1px solid #00a2ff;

  background-color: white;

  border-radius: 16px;

  font-size: 16px;
  color: black;

  transition-property: background-color, color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: white;
    background-color: #00a2ff;
  }

  &.active {
    color: white;
    background-color: #00a2ff;
  }
`;
