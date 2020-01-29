import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTrail, animated } from 'react-spring';

const StyledMenu = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    margin-top: 15vh;
`;
const StyledLink = styled(Link)`
    text-transform: capitalize;
    text-decoration: none;
    color: #000;
    :hover {
        color: #b8ca1f;
    }
`;

const routes = ['/uslugi', '/cennik', '/o-nas', '/kontakt'];

const config = { mass: 5, tension: 2000, friction: 200 };

const BurgerMenu = ({ open }) => {
    const trail = useTrail(routes.length, {
        config,
        opacity: open ? 1 : 0,
        y: open ? 0 : 20,
        height: open ? 80 : 0,
        from: { opacity: 0, y: 20, height: 0 }
    });
    return (
        <StyledMenu>
            {trail.map((props, i) => (
                <animated.div key={i} style={props}>
                    {' '}
                    <StyledLink to={routes[i]}>
                        {routes[i] === '/uslugi'
                            ? 'usługi'
                            : String(
                                  Array.from(routes[i])
                                      .slice(1)
                                      .join('')
                              ).replace('-', ' ')}
                    </StyledLink>{' '}
                </animated.div>
            ))}
        </StyledMenu>
    );
};

export default BurgerMenu;
