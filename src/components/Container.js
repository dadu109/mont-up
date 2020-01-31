import React, { useState } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import logo from '../assets/logo.svg';
import Burger from './Burger';
import BurgerMenu from './BurgerMenu';
import { Link } from 'react-router-dom';

const StyledContainer = styled(animated.div)`
    width: 95vw;
    min-height: calc(100vh - 5vw);
    margin-bottom: 5vw;
    background-color: #fff;
    box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25);
    padding: 0 10vw 5vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* align items in Main Axis */
`;
const StyledNavigation = styled.nav`
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Children = styled.div`
    height: 100%;
`;
const Title = styled.h1`
    font-weight: bold;
    font-size: 36px;
    line-height: 18px;
    color: #768288;
    text-shadow: 3px 2px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
    margin: 5vw 0 15vw 0;
`;

const Container = ({ children, title }) => {
    const [isBurgerOpen, setBurger] = useState(false);

    return (
        <StyledContainer>
            <StyledNavigation>
                <Link to='/'>
                    <img src={logo} alt='logo' />
                </Link>
                <Burger isBurgerOpen={isBurgerOpen} setBurger={setBurger} />
            </StyledNavigation>
            {isBurgerOpen ? (
                <BurgerMenu open={isBurgerOpen} />
            ) : (
                <div>
                    <Title>{title}</Title>
                    <Children>{children}</Children>
                </div>
            )}
        </StyledContainer>
    );
};

export default Container;
