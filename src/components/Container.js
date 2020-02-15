import React, { useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import logo from '../assets/logo.svg';
import Button from './Button';
import Burger from './Burger';
import BurgerMenu from './BurgerMenu';
import { Link } from 'react-router-dom';
import Mess from '../components/Mess';

const StyledContainer = styled(animated.div)`
  min-height: calc(100vh - 5vw);
  margin: 0 5vw 5vw 0;
  background-color: #fff;
  box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25);
  padding: 0 10vw 5vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  @media (min-width: 1440px) {
    min-height: calc(100vh - 40px);
    margin: 0 40px 40px 0;
    padding: 0 70px 70px;
  }
`;

const StyledLogo = styled.img`
  width: auto;
  @media (min-width: 1440px) {
    width: ${(props) => (props.bigLogo ? '600px' : 'auto')};
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 100%;
`;

const StyledNavigation = styled.nav`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1440px) {
    align-items: flex-start;
  }
`;

const Children = styled(animated.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled(animated.h1)`
  font-weight: bold;
  font-size: 36px;
  line-height: 28px;
  color: ${(props) => (props.primary ? '#B8CA1F' : '#768288')};
  text-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
  text-align: center;
  margin: 5vw 0 15vw 0;
`;

const DesktopNav = styled.div`
  padding-top: 70px;
  display: flex;
  a {
    margin-right: 70px;
  }
  a:last-child {
    margin: 0;
  }
  @media (max-width: 1439px) {
    display: none;
  }
`;

const StyledNavLink = styled(Link)`
  font-weight: 300;
  font-size: 24px;
  text-decoration: none;
  color: #000;
  :hover {
    color: #b8ca1f;
  }
`;

const Container = ({ children, title, primary, bigLogo }) => {
  const [isBurgerOpen, setBurger] = useState(false);

  const Animation = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-10%)' }
  });

  return (
    <>
      <StyledContainer>
        <StyledNavigation>
          <Link to='/'>
            <StyledLogo bigLogo={bigLogo} src={logo} alt='logo' />
          </Link>
          <DesktopNav>
            <StyledNavLink to='/uslugi'>Usługi</StyledNavLink>
            <StyledNavLink to='/cennik'>Cennik</StyledNavLink>
            <StyledNavLink to='/o-nas'>O nas</StyledNavLink>
            <StyledNavLink to='/kontakt'>
              <Button>Kontakt</Button>
            </StyledNavLink>
          </DesktopNav>
          <Burger isBurgerOpen={isBurgerOpen} setBurger={setBurger} />
        </StyledNavigation>
        {isBurgerOpen ? (
          <BurgerMenu open={isBurgerOpen} />
        ) : (
          <Wrapper>
            {title && (
              <Title primary={primary} style={Animation}>
                {title}
              </Title>
            )}
            <Children style={Animation}>{children}</Children>
          </Wrapper>
        )}
      </StyledContainer>
      {!isBurgerOpen && <Mess />}
    </>
  );
};

export default Container;
