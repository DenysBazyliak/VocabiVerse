// Libraries
import React from 'react';

// Types
type SectionGroupProps = {
    setSection: React.Dispatch<React.SetStateAction<boolean>>
}

const SectionGroup = () => {
    return (
        <div  className={'section-group'}>
            <div className={'section'}>
                Section 1
            </div>
            <div className={'section'}>
                Section 1
            </div>
            <div className={'section'}>
                Section 1
            </div>
            <div className={'section'}>
                Section 1
            </div>
        </div>

    );
};

const SectionDivider = ({ setSection }: { setSection: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div className={'section-divider-wrapper'}>
            <div className={'section-divider'} onClick={() => setSection(false)}/>
        </div>
    );
};
const SectionFooter = ()=> {
    return (
        <div className={'section-footer'} >
            <button className={'section-footer-button'}> + </button>
        </div>
    );
};

const SectionPaper = ({ setSection }: SectionGroupProps) => {
    return (
        <>
            <div className={'section-paper'}>
                <SectionGroup />
                <SectionDivider setSection={setSection}/>
                <SectionFooter />
            </div>

        </>

);
};

export default SectionPaper;