import styled from 'styled-components';

export const ListItem = styled.div`
  display: flex;
  flex: 1;
  margin: 1rem 2rem 1rem 2rem;
  flex-wrap: wrap-reverse;
  flex-direction: row-reverse;
  align-self: center;
  justify-content: center;
`;
export const Filter = styled.div`
  background-color: var(--grayMedium);
  padding: 0.8rem;
  display: flex;
  justify-content: right;
  align-items: baseline;
`;
Filter.List = styled.select`
  list-style-type: georgian;
  background-color: var(--grayMedium);
  font-size: 1rem;
  border: none;
  z-index: 10;
  padding-right: 0.1rem;
  outline: none;
  &:focus, &:active {
    outline: 0;
    border-bottom-style:solid;
    border-bottom-width: 0.1rem;
    border-bottom-color: var(--black2);
  }
`;

Filter.Item = styled.option`
  border: none;
  background-color: var(--white);
`;

Filter.Title = styled.div`
  font-family: 'Noto Sans Display', sans-serif;
  font-size: 0.8rem;
  font-weight:bold;
`;
