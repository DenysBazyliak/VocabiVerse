import React from 'react';

// Project Imports
import SectionElement from './SectionElement';

const Sections= [
    {
        name: 'Section 1',
        gradient: 'purple-gradient'
    },
    {
        name: 'Section 2',
        gradient: 'purple-gradient'
    },
    {
        name: 'Section 3',
        gradient: 'purple-gradient'
    }
]

const SectionGroup = () => {
    return (
        <div  className={'section-group'}>
            {Sections.map((section)=>{
                return <SectionElement key={section.name} name={section.name} gradient={section.gradient} />
            })}
        </div>

    );
};

export default SectionGroup