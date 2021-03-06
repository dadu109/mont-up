import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const StyledDiv = styled.div`
  padding: '20px 0 20px';
  @media (min-width: 1440px) {
    display: none;
  }
`;

const Burger = ({ isBurgerOpen, setBurger }) => {
  const first = useSpring({
    transform: isBurgerOpen
      ? 'translate(5px, 32px) rotate(-45deg)'
      : 'translate(2px, 7px) rotate(0deg)'
  });
  const second = useSpring({
    transform: isBurgerOpen
      ? 'translate(10px, 4px) rotate(45deg)'
      : 'translate(2px, 19px) rotate(0deg)'
  });
  const third = useSpring({
    transform: isBurgerOpen
      ? 'translate(5px, 32px) rotate(-45deg)'
      : 'translate(2px, 31px) rotate(0deg)'
  });

  return (
    <StyledDiv>
      <svg
        onClick={() => setBurger(!isBurgerOpen)}
        width='40'
        height='32'
        viewBox='0 0 44 44'
        fill='#fafafa'
        xmlns='http://www.w3.org/2000/svg'
      >
        <animated.rect
          width='40'
          height='5'
          rx='2'
          fill='#B8CA1F'
          style={first}
        />
        <animated.rect
          width='40'
          height='5'
          rx='2'
          fill='#B8CA1F'
          style={second}
        />
        <animated.rect
          width='40'
          height='5'
          rx='2'
          fill='#B8CA1F'
          style={third}
        />
      </svg>
    </StyledDiv>
  );
};

export default Burger;
