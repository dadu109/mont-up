import React, { useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import logo from '../assets/logo.svg';
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

const Container = ({ children, title, primary }) => {
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
                        <img src={logo} alt='logo' />
                    </Link>
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
