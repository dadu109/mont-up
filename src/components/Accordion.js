import React, { useState } from 'react';
import AccordionSection from './AccordionSection';

const Accordion = ({ children }) => {
    const [openSections, updateSections] = useState({});
    const onClick = (label) => {
        const isOpen = !!openSections[label];
        updateSections({ [label]: !isOpen });
    };
    return (
        <div>
            {children.map((child, i) => (
                <AccordionSection
                    isOpen={!!openSections[child.props.label]}
                    label={child.props.label}
                    onClick={onClick}
                    key={'akordeon dziecko' + i}
                >
                    {child.props.children}
                </AccordionSection>
            ))}
        </div>
    );
};

export default Accordion;
