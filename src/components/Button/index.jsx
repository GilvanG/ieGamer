import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: var(--primary);
  color: var(--grayLight);
  border-color: var(--white);
  border-radius: 10px;
  border: 0;
  width: 80%;
  padding: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  &:hover {
    opacity: .5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
