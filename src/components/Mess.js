import React from 'react';
import styled from 'styled-components';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledA = styled.a`
    background-color: #fff;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    position: fixed;
    bottom: 10vw;
    right: 10vw;
    div {
        transform: translate(8px, 8px);
    }
`;

const Mess = () => {
    return (
        <StyledA
            href='https://m.me/841866629218985'
            rel='noopener noreferrer'
            target='_blank'
        >
            <div>
                <FontAwesomeIcon
                    icon={faFacebookMessenger}
                    size='3x'
                    color='#00C7FF'
                />
            </div>
        </StyledA>
    );
};

export default Mess;
