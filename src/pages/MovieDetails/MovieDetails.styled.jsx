import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  padding: 24px 0;
`;

export const BackLink = styled(Link)`
  display: block;
  padding: 12px 8px;

  height: 44px;

  margin-right: 8px;

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
`;
export const MovieWrapper = styled.div`
  display: flex;
`;
export const DataWrapper = styled.div`
  padding: 0 16px;
`;
export const TextWrapper = styled.div`
  width: fit-content;
  margin-bottom: 24px;
`;
export const OverViewTitle = styled.h3`
  margin-bottom: 8px;
`;
export const OverViewText = styled.p`
  margin-bottom: 16px;
`;
export const LinkList = styled.ul`
  display: flex;
  gap: 16px;

  padding-left: 0;

  & li {
    margin-left: 0;
  }
`;
