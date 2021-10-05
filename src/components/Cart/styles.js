import styled from 'styled-components';

const Cart = styled.div`
  
`;

Cart.Button = styled.div`
  position: fixed;
  bottom: 5%;
  right: 2.5%;
  z-index: 10;
  background-color: var(--primary);
  border-style: solid;
  padding: 0px 10px 0 10px;
  border-width: 0.25rem;
  border-radius: 5rem;
  &:hover {
    cursor: pointer;
    background: #141454;
    background: #0A0AA4;
  }
`;

Cart.Close = styled.div`
  position: absolute;
  top:0px;
  left:0px;
  width:100%;
  padding: 1rem 2rem 0 2rem;
  text-align: right;
  cursor: pointer;
  @media (max-width: 800px) {
    padding: 0.1rem 0.2rem 0 0.2rem;
    width: 98%;
  }
`;

Cart.opac = styled.div`
  overflow: auto;
  display: block;
  z-index: 10;
  
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  background: linear-gradient(0deg, #141454 0%, transparent 80%);
  position: fixed;
  top: 0%;
  left: 0%;
`;

Cart.Open = styled.div`
  overflow: auto;
  display: block;
  z-index: 12;
  background-color: var(--secundary);
  
  width: auto;
  height: auto;
  min-width: 50%;
  min-height: 50%;
  /* background-color: rgba(10,23,55); */
  color: white;
  
  position: absolute;
  // position: fixed;
  top: 12%;
  margin-top: -25px;
  left: 25%;
  border-radius: 10vh;
  border-bottom-right-radius: 0;
  padding: 1rem;
  @media (max-width: 800px) {
    width: auto;
    height: auto;
    padding: 1rem;
    top: 0;
    left: 0;
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
    border-radius: 0;
    border-bottom-left-radius: 10%;
    margin: 0;
  }
`;

Cart.Open.Title = styled.div`
  text-align:center;
  font-style: oblique;
  font-weight: bold;
  font-size: 80%;
  margin: 0;
  @media (max-width: 800px) {
    margin-top: 1rem;
  }
  /* background-color: var(--primary); */
`;

Cart.Open.Price = styled.span`
  font-size: 60%;
  font-weight: normal;
  @media (max-width: 800px) {
    font-size: 50%;
  }
`;

Cart.Open.ItemInCart = styled.p`
  display: flex;
  padding-top: 0.1rem;
  border-radius: 1vh;
  flex: 1;
  font-size: 40%;
  font-weight: normal;
  padding: 0.5rem 0 0.5rem 0;
  color: var(--black);
  background-color: white;
  /* margin-right: auto; */
  align-items: center;
  /* margin-top: auto;
  margin-bottom: auto;
  flex-direction: ;
  justify-content: center; */
`;
Cart.Open.Button = styled.div`
  font-size: 40%;
  display: inline-flex;
  background-color: var(--white);
  color: #0808E4;
  border-color: var(--black2);
  padding: 1vh;
  border-style: solid;
  border-radius: 1vh;
  border-width: 0.5vh;
  
  position: absolute;
  bottom: 1.5%;
  right: 2.5%;
  width: auto;
  text-align: center;
  &:hover {
    cursor: pointer;
    color: var(--white);
    border-color: var(--white);
    background: var(--primary);//#141454;
  }
  @media (max-width: 800px) {
    font-size: 35%;
    bottom: 1.5%;
  }
`;
Cart.Open.ListCart = styled.span`
  display: flex;
  justify-content: right;
  align-items: baseline;
`;

export default Cart;
