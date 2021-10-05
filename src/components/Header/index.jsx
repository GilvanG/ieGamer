import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleHeader = styled.header`
  padding: 1rem;
  background-color: var(--secundary);
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: white; 
  font-size: 3rem;
  font-weight: bolder;
  font-family: 'Teko', sans-serif;
`;

const Header = ({ children }) => (
  <div>
    <StyleHeader>
      {children}
    </StyleHeader>
  </div>
);

Header.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
