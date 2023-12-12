import Link from 'next/link';
import Navigation from './components/RestNav';
import { Button } from '@nextui-org/react';

export default function Home() {
  return (
    <div className='min-w-full min-h-full'>
      <Navigation/>
      <div className='align-middle justify-center'style={{
        // backgroundImage: `url("/hero.png")`,
        // backgroundSize: 'cover',
        backgroundColor: 'saddlebrown',
        height: '30vw'
      }}>
      <div className='flex flex-col overflow-visible w-4/6 px-10 py-20'>
        <h1 className=' text-3xl'>
          INDULGE IN CHILEAN FLAVORS
        </h1>
        <h3>
          TRY OUR SANTIAGO CATCH THIS MONTH ONLY
GET 10% OFF WHEN YOU RESERVE A TABLE
        </h3>
        <Button className=' w-3/6'>
          Reserve
        </Button>
      </div>
      </div>
    </div>
  )
}
