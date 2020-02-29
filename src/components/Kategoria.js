import React from 'react';
import Container from '../components/Container';
import Accordion from '../components/Accordion';
import styled from 'styled-components';
import Button from '../components/Button';
import { useParams, Link } from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { uslugi } from '../uslugi';
import { storage } from '../firebase';
const thumbnails = importAll(
  require.context('../assets/thumbnails/', false, /\.(png|jpe?g|svg)$/)
);

function importAll(r) {
  return r.keys().map(r);
}

function getThumbnail(title) {
  const match = thumbnails.find((e) =>
    e.includes(title.toLowerCase().replace(new RegExp(' ', 'g'), '-'))
  );
  return match;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  line-height: 28px;
  text-align: center;
  text-decoration: none;
  color: #000;
  margin-bottom: 5vw;
  color: #b8ca1f;
  span {
    text-align: center;
    padding-left: 5vw;
    font-weight: 600;
  }
  :hover {
    color: #b8ca1f;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
    span {
      padding: 20px;
    }
  }
`;
const ClearLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 28px;
  line-height: 28px;
  color: #768288;
  text-shadow: 2px 1px 1px rgba(0, 0, 0, 0.25);
  text-align: center;
  margin: 15px 0;
  @media (min-width: 1440px) {
    margin: 0 0 80px;
    font-size: 72px;
  }
`;

const StyledThumb = styled.img`
  box-shadow: 10px 10px 0px #b8ca1f;
  display: block;
  margin: 10vh auto;
`;

const StyledDesc = styled.p`
  font-weight: 200;
  font-size: 14px;
  line-height: 24px;
`;
const StyledButton = styled(Button)`
  display: block;
  margin: 5vh auto;
  width: 80%;
`;

const Kategoria = () => {
  const zdjecia = [];
  const { catId } = useParams();
  const cat = uslugi.find(({ id }) => id === catId);

  const storeImage = async (e) => {
    const refs = await storage
      .ref(`zdjecia/${catId}`)
      .listAll()
      .then((e) => e.items);
    refs.forEach((e) => {
      e.getDownloadURL().then((zdj) => {
        zdjecia.push(zdj);
      });
    });
    console.log(zdjecia);
  };

  storeImage();

  return (
    <Container>
      <StyledLink to='/uslugi'>
        <FontAwesomeIcon icon={faChevronLeft} size='lg' color='#B8CA1F' />
        <span>Powrót do Kategorii</span>
      </StyledLink>
      <StyledTitle>{cat.title}</StyledTitle>
      <Accordion>
        {cat.sub.map((e) => (
          <div label={e.title}>
            <StyledThumb src={getThumbnail(e.title)} />
            <StyledDesc>{e.desc}</StyledDesc>
            <StyledButton>
              <ClearLink to='/cennik'>Sprawdź ceny</ClearLink>
            </StyledButton>
          </div>
        ))}
      </Accordion>
    </Container>
  );
};

export default Kategoria;
