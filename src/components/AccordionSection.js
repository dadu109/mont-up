import React from 'react';
import styled from 'styled-components';
import { animated, useSpring, useTrail } from 'react-spring';

const Header = styled(animated.div)`
    color: #fff;
    background-color: #768288;
    width: 100%;
    margin-bottom: 10px;
    padding: 13px 0;
    font-weight: 900;
    font-size: 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
`;

const trailConfig = {
    mass: 1,
    tension: 210,
    friction: 15
};

const AccordionSection = ({ children, isOpen, label, onClick }) => {
    const props = useSpring({
        x: isOpen ? 1 : 0,
        from: { x: 0, background: '#768288' }
    });
    const trail = useTrail(children.length, {
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateX(0)' : 'translateX(-10%)',
        from: { opacity: 0, transform: 'translateX(-10%)' },
        config: trailConfig
    });
    const singleChild = useSpring({
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateX(0)' : 'translateX(-10%)',
        from: { opacity: 0, transform: 'translateX(-10%)' },
        config: trailConfig
    });
    return (
        <div>
            <Header
                onClick={() => {
                    onClick(label);
                }}
                style={{
                    background: isOpen ? '#B8CA1F' : '#768288',
                    transform: props.x
                        .interpolate({
                            range: [0, 0.25, 1],
                            output: [1, 0.93, 1]
                        })
                        .interpolate((x) => `scale(${x})`)
                }}
            >
                {label}
            </Header>
            {isOpen && (
                <div>
                    {children.length > 1 ? (
                        trail.map((trailProps, i) => (
                            <animated.div
                                key={JSON.stringify(trailProps) + i}
                                style={trailProps}
                            >
                                {children[i]}
                            </animated.div>
                        ))
                    ) : (
                        <animated.div
                            key={JSON.stringify(singleChild)}
                            style={singleChild}
                        >
                            {children}
                        </animated.div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AccordionSection;
