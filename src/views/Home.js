import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import Mess from '../components/Mess';
import AnimatedImage from '../components/AnimatedImage';
import styled from 'styled-components';
import brudny from '../assets/brudny.svg';
import czysty from '../assets/czysty.svg';
import { Link } from 'react-router-dom';

const RelDiv = styled.div`
  position: relative;
  @media (min-width: 1440px) {
    margin: -70px 0;
  }
`;

const StyledButton = styled(Button)`
  width: 230px;
  @media (min-width: 1440px) {
    width: 295px;
    height: 70px;
    font-size: 36px;
  }
`;

const FlexButtons = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-right: 30px;
  }
`;

const StyledP = styled.p`
  font-weight: 200;
  font-size: 16px;
  line-height: 26px;
  @media (min-width: 1440px) {
    font-size: 36px;
    line-height: 46px;
  }
`;

const MobileDisabled = styled.div`
  @media (max-width: 1439px) {
    display: none;
  }
`;

const Home = () => {
  return (
    <Container bigLogo>
      <RelDiv>
        <StyledP>Mycie wysokociśnieniowe</StyledP>
        <StyledP>Prace alpinistyczne</StyledP>
        <StyledP>Usługi ogrodnicze</StyledP>
      </RelDiv>
      <AnimatedImage img1={brudny} img2={czysty} />
      <FlexButtons>
        <a href='tel:600170529'>
          <StyledButton>Zadzwoń</StyledButton>
        </a>
        <MobileDisabled>
          <Link to='/cennik'>
            <StyledButton secondary>Cennik</StyledButton>
          </Link>
        </MobileDisabled>
        <MobileDisabled>
          <Mess stat />
        </MobileDisabled>
      </FlexButtons>
    </Container>
  );
};

export default Home;
