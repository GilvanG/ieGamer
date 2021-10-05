/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBasic = styled.input`
  /* padding-left: 0.5rem; */
  width: 80%;
  margin-left: 4px;
  margin-right: 4px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border: 1px solid var(--primary);
  color: var(--black);
  background-color: var(--white);;
  border-radius: 8px;
  outline: 0;
  /* margin-bottom: 25px; */
`;

export default function Input({ value }) {
  return (
    <div>
      <InputBasic
        // onChange={Change}
        // placeholder={inText}
        value={value}
        disabled
      />
    </div>
  );
}
Input.propTypes = {
  // Change: PropTypes.func.isRequired,
  // inText: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
