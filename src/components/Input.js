import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 20px 0 0;
  border: none;
  border-bottom: 1px solid #000000;
  font-weight: bold;
  font-size: 18px;
  color: #768288;
  outline-color: #b8ca1f;
  @media (min-width: 1440px) {
    width: 80%;
    margin: 0 auto 40px;
    font-size: 24px;
    padding: 20px 0 10px;
  }
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 20px 0 0;
  border: none;
  border-bottom: 1px solid #000000;
  font-weight: bold;
  font-size: 18px;
  color: #768288;
  outline-color: #b8ca1f;
  max-width: 100%;
  min-height: 60px;
  @media (min-width: 1440px) {
    width: 80%;
    margin: 0 auto 40px;
    font-size: 24px;
    padding: 20px 0 10px;
  }
  ::placeholder {
    transform: translateY(100%);
  }
`;

const Input = ({ children, textarea, ...props }) => {
  return textarea ? (
    <StyledTextArea placeholder={children} {...props} />
  ) : (
    <StyledInput placeholder={children} {...props} />
  );
};

export default Input;
