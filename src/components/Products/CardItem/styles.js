import styled from 'styled-components';

export const Item = styled.div`
  margin: 0.5rem;
  padding-top: 0.5rem;
  background-color: var(--white);
  max-width: 18rem;
  border-width: 0.125rem;
  border-radius: 0.2rem;
  border-style: solid;
  border-color: var(--black);
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  `;

Item.Img = styled.img`
  width: 14rem;
  `;

export const ContainerText = styled.div`
  width: 100%;
  padding: 0.1rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  background-color: var(--grayMedium);
  font-size: 1.02vw;
  border-top-width: 0.05rem;
  border-top-style: solid;
  border-top-color: var(--black2);
  
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 10px;
`;

Item.Description = styled.div`
  width: 100%;
  font-size: 0.8rem;
  
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: auto;
`;

Item.Title = styled.div`
  height: 100%;
  margin-bottom: 0.5vw;
  font-size: 16px;
  display: flexbox;
  align-items: center;
`;

Item.Qtd = styled.div`
  font-size: 16px;
  width: 60%;
  display: flex;
  flex: 1;
  align-items: center;
`;
