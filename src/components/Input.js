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
`;
const StyledTextArea = styled.textarea`
    width: 100%;
    padding: 20px 0 0;
    border: none;
    border-bottom: 1px solid #000000;
    font-weight: bold;
    font-size: 18px;
    color: #768288;
    max-width: 100%;
    min-height: 60px;
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
