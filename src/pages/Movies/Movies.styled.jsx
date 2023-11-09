import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin-bottom: 16px;

  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;

  padding: 12px 8px;

  height: 48px;

  padding: 12px 8px;
  border: 1px solid #00a2ff;

  background-color: white;

  border-radius: 16px;

  font-size: 16px;
  color: black;

  transition-property: background-color, color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
    color: white;
    background-color: #00a2ff;
  }
`;
export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  max-width: 300px;
  padding: 12px 8px;
  border: 1px solid #00a2ff;

  background-color: white;

  border-radius: 16px;

  font-size: 16px;
  color: black;
  font: inherit;
  font-size: 20px;

  outline: none;
  &:focus {
    outline: 2px solid #00a2ff;
  }

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
