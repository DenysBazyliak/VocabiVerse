import React from 'react';

// Types
type SectionContractingTagProps = {
    contracted: boolean
    setContracted: React.Dispatch<React.SetStateAction<boolean>>
}
const SectionContractingTag = ({ contracted,setContracted }: SectionContractingTagProps) => {
    return (
        <div className={'grid grid-rows-subgrid col-span-1 row-span-10'}>
            <div className={'section-divider hover:scale-x-125 '} onClick={() => setContracted(!contracted)}/>
        </div>
    );
};

export default SectionContractingTag;