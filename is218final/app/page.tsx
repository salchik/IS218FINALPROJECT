import Link from 'next/link';
import RestNav from './components/RestNav';
import { Button } from '@nextui-org/react';

export default function Home() {
  return (
    <div className='min-w-full min-h-full'>
      <RestNav/>
      <div className='relative'>
        <div className='align-middle justify-center'style={{
          backgroundImage: `url("/hero.svg")`,
          backgroundSize: 'cover',
          backgroundPositionY: '90%',
          paddingBottom: '600px',
          width: '100%',
          opacity: '.3',
          zIndex: '-1'
        }}/>
        <div className='flex flex-col overflow-visible w-11/12 px-32 py-16 z-10 absolute top-16'>
          <h1 className='text-8xl font-playfair'>
            INDULGE IN CHILEAN FLAVORS
          </h1>
          <h3 className='font-roboto font-light text-lg w-5/12 my-10'>
            TRY OUR SANTIAGO CATCH THIS MONTH ONLY
  GET 10% OFF WHEN YOU RESERVE A TABLE
          </h3>
          <Button className=' w-4/12 text-2xl font-playfair bg-buttonRed py-3 rounded'>
          {/* #A52323 */}
            Reserve
          </Button>
        </div>
      </div>
    </div>
  )
}
