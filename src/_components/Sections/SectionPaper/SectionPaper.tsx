'use client'

// Libraries
import React, { useState } from 'react';

// Project Imports
import SectionContractingTag from '@/_components/Sections/SectionPaper/SectionContractingTag';
import SectionFooter from '@/_components/Sections/SectionPaper/SectionFooter';
import SectionGroup from '@/_components/Sections/SectionPaper/SectionGroup/SectionGroup';

// Types
type SectionGroupProps = {
    setSection: React.Dispatch<React.SetStateAction<boolean>>
}

const SectionPaper = ({ setSection }: SectionGroupProps) => {
    const [contracted, setContracted] = useState(false)
    return (
        <>
            <div className={`fixed left-0 top-0 my-20 mx-4 px-4 w-[260px] h-[450px] bg-black rounded-3xl grid grid-cols-10 grid-rows-12 gap-4 transition-all duration-300 ease-in-out ${contracted ? 'left-[-238px]' : 'w-[260px]'}`}>
                <SectionGroup />
                <SectionContractingTag contracted={contracted} setContracted={setContracted}/>
                <SectionFooter />
            </div>

        </>

);
};

export default SectionPaper;