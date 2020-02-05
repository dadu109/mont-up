import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import domek from '../assets/domek.svg';
import domek2 from '../assets/download.jpeg';

const StyledContainer = styled(animated.div)`
    height: 200px;
    width: 100%;
    background-color: #b8ca1f;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`;

const StyledDiv = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
`;

const config = { mass: 500, tension: 1, friction: 500 };

const AnimatedImage = () => {
    const [toggle, set] = useState(true);
    const { opacity, x } = useSpring({
        opacity: toggle ? 0 : 1,
        x: toggle ? 1 : 0,
        from: { x: 1 }
    });

    useEffect(() => {
        const delay = setInterval(() => {
            set(!toggle);
            console.log('siema');
        }, 7000);
        return () => clearInterval(delay);
    }, [toggle]);

    return (
        <StyledDiv>
            <StyledContainer
                onClick={() => {
                    set(!toggle);
                }}
                style={{
                    config,
                    opacity: opacity.interpolate({
                        range: [0, 0.05, 0.95, 1],
                        output: [0, 1, 1, 0]
                    }),
                    transform: x
                        .interpolate({
                            range: [0, 0.25, 0.5, 0.75, 1],
                            output: [0, 0.6, 1, 0.6, 0]
                        })
                        .interpolate((x) => `scaleX(${x})`)
                }}
            ></StyledContainer>
            <img src={toggle ? domek : domek} alt='domek'></img>
        </StyledDiv>
    );
};

export default AnimatedImage;
