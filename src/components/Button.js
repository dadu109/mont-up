import React, { useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const StyledButton = styled(animated.button)`
  background-color: ${(props) =>
    props.secondary ? 'rgba(0, 0, 0, 0)' : '#b8ca1f'};
  position: relative;

  width: 230px;
  min-height: 42px;
  text-align: center;
  font-size: 24px;
  line-height: 18px;
  color: ${(props) => (props.secondary ? '#B8CA1F' : '#fff')} !important;
  font-family: Roboto;
  font-style: italic;
  font-weight: 900;
  border: ${(props) => (props.secondary ? '4px solid #B8CA1F' : 'none')};
  cursor: pointer;
  z-index: 2;
  box-shadow: ${(props) =>
    props.secondary ? 'none' : '5px 7px 4px rgba(0, 0, 0, 0.25)'};
`;

const DropShadow = styled.div`
  display: ${(props) => (props.secondary ? 'block' : 'none')};
  position: absolute;
  z-index: -1;
  height: 110%;
  top: 5px;
  left: 4px;
  border: 3px solid rgba(0, 0, 0, 0.25);
  filter: blur(2px);
`;

const Button = ({ children, ...props }) => {
  const [clicked, set] = useState(false);
  const springProps = useSpring({ transform: `scale(${clicked ? 0.8 : 1})` });
  return (
    <StyledButton
      onMouseDown={() => set(true)}
      onMouseUp={() => set(false)}
      style={springProps}
      {...props}
    >
      {children}
      <DropShadow {...props} />
    </StyledButton>
  );
};

export default Button;
