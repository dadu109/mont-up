import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTrail, animated } from 'react-spring';

const StyledMenu = styled.div`
    width: 100%;
    padding: 20vw 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around; /* align items in Main Axis */
    text-align: center;
    flex: 1;
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
        transform: open ? 'translateY(0)' : 'translateY(-10%)',
        from: { opacity: 0, transform: 'translateY(-10%)' }
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
