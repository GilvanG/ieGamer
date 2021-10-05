import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: var(--secundary);
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: white; 
`;

const Footer = ({ children }) => (
  <div>
    <FooterContainer>
      {children}
    </FooterContainer>
  </div>
);

Footer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Footer;
