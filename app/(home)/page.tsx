'use client';

import { Player } from '@lottiefiles/react-lottie-player';
import CONSOLE from '@assets/lottie/console.json';
import React from 'react';
import Link from 'next/link';
import Github from '@/assets/icons/Github';
import Footer from '@/components/footer';

const Home = () => {
  return (<>
    <section className='min-h-[90vh] pt-44 md:pt-32 font-garet-medium flex select-none'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4'>
        <div className='md:mt-0 md:w-1/2 flex flex-col items-start justify-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200'>
            Start building <span className='text-primary'>today</span>.
          </h1>
          <p className='text-sm sm:text-md md:text-lg font-garet-book text-gray-200 mt-4'>
            <span className='font-garet-bold uppercase'>JSONDummy</span> API allows developers to effortlessly create and customize dummy JSON data for testing, prototyping, and educational purposes.
            Simplify your development workflow by generating realistic mock data tailored to your specific needs.
          </p>

          <div className='mt-5 md:ml-5 w-full md:w-auto flex items-center justify-center'>
            <Link href="https://github.com/ipuppyyt/JSONDummy" target='_blank' className='flex bg-gray-700 space-x-2 px-5 py-2 rounded-full'>
              <Github width={20} color='#fff' />
              <span>View On GitHub</span>
            </Link>
          </div>

        </div>
        <div className='md:w-1/2 flex justify-center items-center mt-8 md:mt-0'>
          <Player autoplay loop direction={1} src={CONSOLE} />
        </div>


      </div>
    </section>
    <Footer />
  </>);
}

export default Home;