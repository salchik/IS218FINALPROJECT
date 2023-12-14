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
            GET 10% OFF WHEN YOU RESERVE A TABLE
          </h3>
          <Button className=' w-4/12 text-2xl font-playfair bg-buttonRed py-3 rounded'>
            Reserve
          </Button>
        </div>
      </div>
      <div className='w-full py-5' />
      <div className='w-full bg-white py-40 flex justify-center'>
        <div className='text-black w-full flex flex-col text-center'>
          <h3>
            WORDS OF RAPTURE
          </h3>
          <h1 className='text-6xl font-playfair w-3/4 mx-auto my-5'>
            RHAPSODIES FROM OUR BELOVED PATRONS
          </h1>
          <ul className='inline-flex justify-center'>
            <li className='w-1/4 mx-2'>
              <div className='bg-black font-roboto font-thin text-white px-16 py-14 rounded-xl'>
                <h4>
                  “SANCTUARY WHERE LOVE AND SEAFOOD COMBINE.”
                </h4>
                <p>
                  PIERRE AND CHERYL
                </p>
              </div>
            </li>
            <li className='w-1/4 mx-2'>
              <div className='bg-black font-roboto font-thin text-white px-16 py-14 rounded-xl'>
                <h4>
                  “SANCTUARY WHERE LOVE AND SEAFOOD COMBINE.”
                </h4>
                <p>
                  PIERRE AND CHERYL
                </p>
              </div>
            </li>
            <li className='w-1/4 mx-2'>
              <div className='bg-black font-roboto font-thin text-white px-16 py-14 rounded-xl'>
                <h4>
                  “SANCTUARY WHERE LOVE AND SEAFOOD COMBINE.”
                </h4>
                <p>
                  PIERRE AND CHERYL
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
