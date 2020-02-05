import React, { useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const StyledButton = styled(animated.button)`
    background: #b8ca1f;
    box-shadow: 5px 7px 4px rgba(0, 0, 0, 0.25);
    width: 250px;
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
    const [clicked, set] = useState(false);

    const springProps = useSpring({ transform: `scale(${clicked ? 0.8 : 1})` });
    return (
        <StyledButton
            onMouseDown={() => set(true)}
            onMouseUp={() => set(false)}
            {...props}
            style={springProps}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
