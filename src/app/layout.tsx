// Library Imports


// Project Imports
// import CommonLayout from '../layout/CommonLayout/index';
import MainLayout from '@/layout/MainLayout';
import './globals.css';

const logged = false;


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang='en'>
        <body className={'h-full'}>
        <MainLayout />
        {children}</body>
        </html>
    );
}