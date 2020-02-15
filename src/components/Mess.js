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
  @media (min-width: 1440px) {
    display: ${(props) => (props.stat ? 'block' : 'none')};
    position: unset;
  }
`;

const Mess = ({ stat }) => {
  return (
    <StyledA
      href='https://m.me/841866629218985'
      rel='noopener noreferrer'
      target='_blank'
      stat={stat}
    >
      <div>
        {stat ? (
          <FontAwesomeIcon
            icon={faFacebookMessenger}
            size='4x'
            color='#00C7FF'
          />
        ) : (
          <FontAwesomeIcon
            icon={faFacebookMessenger}
            size='3x'
            color='#00C7FF'
          />
        )}
      </div>
    </StyledA>
  );
};

export default Mess;
