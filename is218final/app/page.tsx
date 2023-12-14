import Link from 'next/link';
import RestNav from './components/RestNav';
import { Button } from '@nextui-org/react';

export default function Home() {
  return (
    <div className='min-w-full min-h-full'>
      <RestNav />
      <div className='relative'>
        <div className='align-middle justify-center' style={{
          backgroundImage: `url("/hero.svg")`,
          backgroundSize: 'cover',
          backgroundPositionY: '90%',
          paddingBottom: '600px',
          width: '100%',
          opacity: '.3',
          zIndex: '-1'
        }} />
        <div className='flex flex-col overflow-visible w-11/12 px-32 py-16 z-10 absolute top-16'>
          <h1 className='text-8xl font-playfair'>
            INDULGE IN CHILEAN FLAVORS
          </h1>
          <h3 className='font-roboto font-light text-lg w-5/12 my-10'>
            TRY OUR SANTIAGO CATCH THIS MONTH ONLY
            GET <span className='font-bold'>10%</span> OFF WHEN YOU RESERVE A TABLE
          </h3>
          <Button className=' w-4/12 text-2xl font-playfair bg-buttonRed py-3 rounded'>
            Reserve
          </Button>
        </div>
      </div>
      <div className='w-full py-5' />
      <div className='w-full bg-white py-40 flex justify-center'>
        <div className='text-black w-full flex flex-col text-center'>
          <h3 className=' font-roboto font-semibold text-buttonRed'>
            WORDS OF RAPTURE
          </h3>
          <h1 className='text-6xl font-playfair w-3/4 mx-auto my-5'>
            RHAPSODIES FROM OUR BELOVED PATRONS
          </h1>
          <ul className='inline-flex justify-center mt-14'>
            <li className='w-1/4 mx-3'>
              <div className='bg-black text-white py-10 px-14 h-full rounded-xl'>
                <h4 className='font-roboto font-thin text-lg mb-4'>
                  “SANCTUARY WHERE LOVE AND SEAFOOD COMBINE.”
                </h4>
                <p className='font-playfair'>
                  PIERRE &amp; CHERYL
                </p>
              </div>
            </li>
            <li className='w-1/4 mx-3'>
              <div className='bg-black text-white py-10 px-14 h-full rounded-xl'>
                <h4 className='font-roboto font-thin text-lg mb-4'>
                  “WONDERFULLY DIVINE.”
                </h4>
                <p className='font-playfair'>
                  STEVE &amp; JERMAINE
                </p>
              </div>
            </li>
            <li className='w-1/4 mx-3'>
              <div className='bg-black text-white py-10 px-14 h-full rounded-xl'>
                <h4 className='font-roboto font-thin text-lg mb-4'>
                  “THE AMBIANCE INVITED THE FLAMES OF ROMANCE.”
                </h4>
                <p className='font-playfair'>
                  SARAH &amp; JAMES
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='relative'>
        <div className='align-middle justify-center' style={{
          backgroundImage: `url("/landingAbout1.svg")`,
          backgroundSize: 'cover',
          backgroundPositionY: '95%',
          paddingBottom: '600px',
          width: '100%',
          opacity: '.3',
          zIndex: '-1'
        }} />
        <div className='flex flex-col overflow-visible w-11/12 px-32 py-16 z-10 absolute top-16'>
          <h1 className='text-8xl font-playfair'>
            INDULGE IN CHILEAN FLAVORS
          </h1>
          <h3 className='font-roboto font-light text-lg w-5/12 my-10'>
            TRY OUR SANTIAGO CATCH THIS MONTH ONLY
            GET 10% OFF WHEN YOU RESERVE A TABLE
          </h3>
          <Button className=' w-4/12 text-2xl font-playfair bg-buttonRed py-3 rounded'>
            Reserve
          </Button>
        </div>
      </div>
    </div>
  )
}
