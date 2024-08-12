import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='h-[10vh] z-20 py-2 shadow-md'>
            <div className='flex flex-col md:flex-row justify-between px-6 md:px-24 items-center h-full'>

                <span className='text-sm font-garet-bold md:text-sm text-center md:text-left'>
                    &copy; {new Date().getFullYear()}&nbsp;
                    <Link href='https://github.com/ipuppyyt' target='_blank' className='hover:underline underline-offset-2 transition duration-200 hover:text-gray-400'>
                        @ipuppyyt
                    </Link>
                </span>

                <span className='text-sm font-garet-bold md:text-sm text-center md:text-right -mt-10 md:mt-0'>
                    <Link href='https://vercel.com/?referrer=JSONDummy' target='_blank' className='hover:underline underline-offset-2 transition duration-200 hover:text-gray-400'>
                        Hosted On Vercel
                    </Link>
                </span>
            </div>
        </footer>
    );
}

export default Footer;