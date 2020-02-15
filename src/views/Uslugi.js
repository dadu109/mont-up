import React from 'react';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMenu = styled.div`
  width: 100%;
  padding: 20vw 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  flex: 1;
`;
const StyledLink = styled(Link)`
  text-transform: capitalize;
  text-decoration: none;
  color: #000;
  padding-bottom: 30px;
  border-bottom: 1px solid black;
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
        Mycie powierzchni
      </StyledLink>
      <StyledLink to={`/uslugi/zakladanie-ogrodow`}>
        Zakładanie ogrodów i trawników
      </StyledLink>
      <StyledLink to={`/uslugi/pielegnacja-ogrodow`}>
        Pielęgnacja ogrodów i trawników
      </StyledLink>
      <StyledLink to={`/uslugi/wycinka-drzew`}>Wycinka drzew</StyledLink>
      <StyledLink to={`/uslugi/prace-alpinistyczne`}>
        Prace alpinistyczne
      </StyledLink>
    </StyledMenu>
  );
};

const Uslugi = () => {
  return (
    <Container>
      <Kategorie />
    </Container>
  );
};

export default Uslugi;
