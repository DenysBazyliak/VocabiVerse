// Library Imports


// Project Imports
// import CommonLayout from '../layout/CommonLayout/index';
import MainLayout from '@/layout/MainLayout';
import './globals.css';

// const logged = false;


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang='en'>
            <body className={'h-full'}>
                <MainLayout />
                    <div className={'absolute bottom-0 right-0 h-[calc(100%-60px)] w-[100%] bg-[#0B0C10]'}>
                        {children}
                    </div>
            </body>
        </html>
    );
}