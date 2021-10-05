/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 1rem;
  background-color: var(--secundary);
  
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  color: white; 
  font-size: 3rem;
  font-weight: bolder;
  font-family: 'Teko', sans-serif;
`;
export const Menu = styled.span``;
Menu.Button = styled.span`
  margin-left: 0.2rem;
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
Menu.Open = styled.div`
  position: fixed;
  overflow: auto;
  z-index: 12;
  
  color: white;
  background-color: var(--secundary);
  
  width: auto;
  height: auto;
  min-width: 25%;
  min-height: 100%;
  
  font-size: 1rem;
  font-weight: 500;
  top: 0%;
  left: 0%;
  padding: 1rem;
  border-top-right-radius: 5vh;
  @media (max-width: 800px) {
    width: auto;
    height: auto;
    padding: 1rem;
    top: 0;
    left: 0;
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
    font-size: 1.5rem;
    border-radius: 0;
    border-bottom-right-radius: 10%;
    margin: 0;
  }
`;
Menu.Title = styled.span`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;
Menu.Option = styled.p`
  cursor: pointer;
  display: flex;
`;
Menu.IconOption = styled.p`
  margin: 0 .5rem 0 .5rem;
`;
Menu.Close = styled.div`
  position: absolute;
  top: 1.5%;
  right:5%;
  font-size: 3.5vh;
`;
Menu.OpenContainer = styled.div`
  overflow: auto;
  display: block;
  z-index: 11;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  background-color: rgba(10, 10, 10, 0.5);
  position: fixed;
  top: 0%;
  left: 0%;
`;
