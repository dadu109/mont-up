import React from 'react';
import Container from '../components/Container';
import styled from 'styled-components';
import Form from '../components/Form';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Info = styled.div`
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        text-align: center;
        align-items: center;
    }
    a {
        text-decoration: none;
        display: flex;
        align-items: center;
    }
`;

const StyledSpan = styled.span`
    color: #b8ca1f;
    font-weight: bold;
    font-size: ${(props) => (props.small ? '15px' : '30px')};
    text-align: left;
    margin-left: 20px;
    width: 100%;
`;

const Cred = styled.div`
    flex-direction: column;
    font-weight: 300;
    font-size: 14px;
    line-height: 26px;
    text-align: left;
`;

const Kontakt = () => {
    return (
        <Container primary title='Kontakt'>
            <Wrapper>
                <Form />
                <Info>
                    <div>
                        <a href='tel:600170529'>
                            <FontAwesomeIcon
                                icon={faPhoneAlt}
                                size='3x'
                                color='#768288'
                            />
                            <StyledSpan>600 170 529</StyledSpan>
                        </a>
                    </div>
                    <div>
                        <a href='mailto:oskar94osocha@gmail.com'>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                size='3x'
                                color='#768288'
                            />
                            <StyledSpan small>
                                oskar94osocha@gmail.com
                            </StyledSpan>
                        </a>
                    </div>
                    <Cred>
                        <p>MONT-UP Osocha Oskar </p>
                        <p>Góra Motyczna 164</p>
                        <p>39-204 Żyraków</p>
                        <p>NIP: 872-240-34-50</p>
                    </Cred>
                </Info>
            </Wrapper>
        </Container>
    );
};

export default Kontakt;
