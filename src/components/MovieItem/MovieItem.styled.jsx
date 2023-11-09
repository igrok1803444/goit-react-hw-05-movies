import styled from 'styled-components';

export const Item = styled.li`
  overflow: hidden;

  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  & img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  & img:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const TitleContainer = styled.div`
  padding: 12px;
`;
export const Title = styled.h2`
  text-align: center;
  color: black;
`;
export const OriginalTitle = styled.p`
  text-align: center;
  color: black;
`;
