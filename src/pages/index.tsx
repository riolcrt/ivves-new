import React from 'react';
import Hero from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { Video } from '@/components/Video';
import { Tool } from '@/components/Tool';
import SEO from '@/components/SEO';


export default function Home() {
  return (
    <>
      <SEO />
      <Hero />

      {/* <About /> */}

      <main className='mx-auto max-w-screen-xl px-6 sm:px-8'>
        <div className='mt-16 space-y-20'>

          <Tool />

        </div>

      </main>
    

      <main className='mx-auto max-w-screen-xl px-6 sm:px-8'>
        <div className='mt-16 space-y-20'>
          <Video />
        </div>
      </main>
      <Footer />
    </>
  );
}
