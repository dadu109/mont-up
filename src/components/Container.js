import React, { useState } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import logo from '../assets/logo.svg';
import Burger from './Burger';
import BurgerMenu from './BurgerMenu';
import { Link } from 'react-router-dom';

const StyledContainer = styled(animated.div)`
    width: 95vw;
    height: calc(100vh - 5vw);
    background-color: #fff;
    box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25);
    padding: 0 10vw;
    text-align: center;
`;
const StyledNavigation = styled.nav`
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
            {isBurgerOpen ? <BurgerMenu open={isBurgerOpen} /> : children}
        </StyledContainer>
    );
};

export default Container;
