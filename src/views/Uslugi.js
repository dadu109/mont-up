import React from 'react';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMenu = styled.div`
  width: 100%;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  height: 100%;
  flex: 1;
`;
const StyledLink = styled(Link)`
  flex: 1;
  text-transform: capitalize;
  text-decoration: none;
  color: #000;
  /* border-bottom: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1440px) {
    font-size: 24px;
  }
  :last-child {
    border: none;
  }
  :hover {
    color: #b8ca1f;
  }
`;

const Kategorie = () => {
  return (
    <StyledMenu>
      <StyledLink to={`/uslugi/mycie-powierzchni`}>
        <span>Mycie powierzchni</span>
      </StyledLink>
      <StyledLink to={`/uslugi/zakladanie-ogrodow`}>
        <span>Zakładanie ogrodów i trawników</span>
      </StyledLink>
      <StyledLink to={`/uslugi/pielegnacja-ogrodow`}>
        <span>Pielęgnacja ogrodów i trawników</span>
      </StyledLink>
      <StyledLink to={`/uslugi/wycinka-drzew`}>
        <span>Wycinka drzew</span>
      </StyledLink>
      <StyledLink to={`/uslugi/prace-alpinistyczne`}>
        <span>Prace alpinistyczne</span>
      </StyledLink>
    </StyledMenu>
  );
};

const Uslugi = () => {
  return (
    <Container title='Usługi'>
      <Kategorie />
    </Container>
  );
};

export default Uslugi;
