
import React from 'react';

 type FooterProps = {
     setForm: React.Dispatch<React.SetStateAction<boolean>>,
     form: boolean
 }



function Footer({setForm, form}:FooterProps) {

    return (
        <footer className={'absolute z-30 bottom-0 flex justify-center items-center h-[100px] w-full'}>
            <button className=
                        {' w-[80px] mb-12 h-[80%] rounded-full text-[#0B0C10] bg-[#ffffff]  text-3xl' +
                            ' text-center shadow-[0_5px_5px_0px_rgba(0,0,0,0.2)] scale-110 hover:shadow-[0_10px_10px_0px_rgba(0,0,0,0.2)] hover:scale-110 active:shadow-none active:scale-100  ' +
                            'transition-all duration-150 ease-linear'}
                    onClick={() =>{
                        setForm(!form)
                    }}> +
            </button>
        </footer>
    );
}

export default Footer;