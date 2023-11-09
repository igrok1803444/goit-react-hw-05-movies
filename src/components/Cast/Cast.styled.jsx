import styled from 'styled-components';

export const ActorsList = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  padding-left: 0;
`;
export const ActorItem = styled.li`
  width: calc((100% - 96px) / 6);
  min-height: 280px;
`;
export const ActorPhoto = styled.img`
  width: 100%;
  min-height: 200px;
`;
