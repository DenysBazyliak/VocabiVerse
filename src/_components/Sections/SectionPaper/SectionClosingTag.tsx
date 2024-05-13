import React from 'react';

const SectionClosingTag = ({ setSection }: { setSection: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div className={'section-divider-wrapper'}>
            <div className={'section-divider'} onClick={() => setSection(false)}/>
        </div>
    );
};

export default SectionClosingTag;