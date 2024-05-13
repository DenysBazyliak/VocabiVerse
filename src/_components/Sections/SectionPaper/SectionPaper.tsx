// Libraries
import React from 'react';

// Project Imports
import SectionClosingTag from '@/_components/Sections/SectionPaper/SectionClosingTag';
import SectionFooter from '@/_components/Sections/SectionPaper/SectionFooter';
import SectionGroup from '@/_components/Sections/SectionPaper/SectionGroup/SectionGroup';

// Types
type SectionGroupProps = {
    setSection: React.Dispatch<React.SetStateAction<boolean>>
}

const SectionPaper = ({ setSection }: SectionGroupProps) => {
    return (
        <>
            <div className={'section-paper'}>
                <SectionGroup />
                <SectionClosingTag setSection={setSection}/>
                <SectionFooter />
            </div>

        </>

);
};

export default SectionPaper;