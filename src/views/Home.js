import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import AnimatedImage from '../components/AnimatedImage';
import styled from 'styled-components';
import domek from '../assets/domek.svg';

const StyledP = styled.p`
    font-weight: 200;
    font-size: 16px;
    line-height: 26px;
`;

const StyledButton = styled(Button)`
    width: 55vw;
`;

const Home = () => {
    return (
        <Container>
            <div>
                <StyledP>Mycie wysokociśnieniowe</StyledP>
                <StyledP>Prace alpinistyczne</StyledP>
                <StyledP>Usługi ogrodnicze</StyledP>
            </div>
            {/* <img src={domek} alt='domek' /> */}
            <AnimatedImage />
            <a href='tel:600170529'>
                <StyledButton>Zadzwoń</StyledButton>
            </a>
        </Container>
    );
};

export default Home;
