import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 22px 0;
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    justify-content: space-between;
    flex-direction: row;
    margin: 44px 0;
  }
`;
const Title = styled.h4`
  position: relative;
  font-weight: 500;
  font-size: 20px;
  color: #768288;
  text-align: left;
  padding-left: 40px;
  ::before {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    content: '';
    position: absolute;
    background: #b8ca1f;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    width: 15px;
    height: 15px;
  }
`;

const Desc = styled.p`
  font-weight: 200;
  font-size: 16px;
  margin: 12px 0 0;
`;

const Ile = styled.div`
  margin: 20px 0;
  font-weight: 200;
  font-size: 18px;
  span {
    font-weight: 300;
  }
  @media (min-width: 1440px) {
    margin-right: 20vw;
  }
`;
const Inline = styled.div`
  display: inline;
`;

const Cena = ({ title, children, cenaod, cenado, cena, za }) => {
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <Desc>{children}</Desc>
      </div>
      <Ile>
        {cenaod && (
          <Inline>
            {'od '}
            <span>{`${cenaod} zł`}</span>
          </Inline>
        )}
        {cenado && (
          <Inline>
            {' do '}
            <span>{`${cenado} zł`}</span>
          </Inline>
        )}
        {cena && (
          <Inline>
            <span>{`${cena} zł`}</span>
          </Inline>
        )}
        {za && (
          <Inline>
            {' / '}
            {za}
          </Inline>
        )}
      </Ile>
    </Container>
  );
};

export default Cena;
