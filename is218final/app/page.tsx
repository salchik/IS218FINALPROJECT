import Link from 'next/link';
import Navigation from './components/RestNav';
import { Button } from '@nextui-org/react';

export default function Home() {
  return (
    <div className='min-w-full min-h-full'>
      <Navigation/>
      <div className='relative'>
        <div className='align-middle justify-center'style={{
          backgroundImage: `url("/hero.svg")`,
          backgroundSize: 'cover',
          backgroundPositionY: '90%',
          paddingBottom: '600px',
          width: '100%',
          opacity: '.6',
          zIndex: '-1'
        }}/>
        <div className='flex flex-col overflow-visible w-4/6 px-16 py-16 z-10 absolute top-52'>
          <h1 className='text-3xl font-playfair'>
            INDULGE IN CHILEAN FLAVORS
          </h1>
          <h3 className='font-roboto font-light'>
            TRY OUR SANTIAGO CATCH THIS MONTH ONLY
  GET 10% OFF WHEN YOU RESERVE A TABLE
          </h3>
          <Button className=' w-1/4'>
            Reserve
          </Button>
        </div>
      </div>
    </div>
  )
}
