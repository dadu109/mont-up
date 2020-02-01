import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: #b8ca1f;
    box-shadow: 5px 7px 4px rgba(0, 0, 0, 0.25);
    min-width: 250px;
    min-height: 42px;
    text-align: center;
    font-size: 24px;
    line-height: 18px;
    color: #ffffff;
    font-family: Roboto;
    font-style: italic;
    font-weight: 900;
    border: none;
`;

const Button = ({ primary, children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
