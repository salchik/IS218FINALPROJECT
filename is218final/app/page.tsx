import Link from 'next/link';
import RestNav from './components/RestNav';
import { Button, Image } from '@nextui-org/react';
import RestFooter from './components/RestFooter';

export default function Home() {
  return (
    <div className='min-w-full min-h-full'>
      <RestNav />
      <div data-testid='heroContainer' className='relative'>
        <img data-testid='heroImage' alt='A family eating dinner'  src='/hero.webp' style={{
          objectFit: 'cover',
          imageRendering: 'pixelated',
          opacity: '.3',
          height: '800px',
          zIndex: '-1'
        }} />
        <div className='flex flex-col overflow-visible w-11/12 px-32 z-10 absolute top-56'>
          <h1 className='text-8xl font-playfair'>
            INDULGE IN CHILEAN FLAVORS
          </h1>
          <h3 className='font-roboto font-light text-lg w-5/12 my-10'>
            TRY OUR SANTIAGO CATCH THIS MONTH ONLY
            GET 10% OFF WHEN YOU RESERVE A TABLE
          </h3>
          <Button color='secondary' className=' w-4/12 text-2xl font-playfair bg-buttonRed py-10 rounded'>
            <Link href={'/reservation'}>RESERVE</Link>
          </Button>
        </div>
      </div>
      <div className='w-full py-5' />
      <div className='w-full bg-white py-40 flex justify-center'>
        <div className='text-center'>
          <h3 className=' font-roboto font-semibold text-buttonRed'>
            WORDS OF RAPTURE
          </h3>
          <h1 className='text-6xl font-playfair text-black w-3/4 mx-auto my-5'>
            RHAPSODIES FROM OUR BELOVED PATRONS
          </h1>
          <ul className='inline-flex justify-center mt-14'>
            <li className='w-1/4 mx-3'>
              <div className='bg-black py-10 px-14 h-full rounded-xl'>
                <h4 className='font-roboto font-thin text-lg mb-4'>
                  “SANCTUARY WHERE LOVE AND SEAFOOD COMBINE.”
                </h4>
                <p className='font-playfair'>
                  PIERRE &amp; CHERYL
                </p>
              </div>
            </li>
            <li className='w-1/4 mx-3'>
              <div className='bg-black py-10 px-14 h-full rounded-xl'>
                <h4 className='font-roboto font-thin text-lg mb-4'>
                  “WONDERFULLY DIVINE.”
                </h4>
                <p className='font-playfair'>
                  STEVE &amp; JERMAINE
                </p>
              </div>
            </li>
            <li className='w-1/4 mx-3'>
              <div className='bg-black py-10 px-14 h-full rounded-xl'>
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
        <div style={{
          backgroundImage: `url("/landingAbout.webp")`,
          backgroundSize: 'cover',
          backgroundPositionY: '95%',
          paddingBottom: '700px',
          width: '100%',
          opacity: '.3',
          zIndex: '-1'
        }} />
        <div className='flex flex-col overflow-visible w-11/12 px-32 py-16 z-10 absolute top-10'>
          <h3 className=' font-roboto font-semibold mb-5'>
            ABOUT
          </h3>
          <h1 className='text-5xl font-playfair'>
          DISCOVER THE ESSENCE BEHIND <br/> AMOUR DE MER
          </h1>
          <h3 className='font-roboto font-light text-xl w-10/12 my-10'>
          In the heart of a bustling coastal town stands an exquisite testament to love and culinary 
          excellence: &quot;Amour de Mer.&quot; <br/> <br/> This upscale seafood restaurant is more than just a dining 
          establishment; it is a sanctuary for lovers, a place where the symphony of ocean waves 
          meets the artistry of gastronomy.
          </h3>
          <Button color='secondary' className=' w-3/12 text-2xl mt-2 font-roboto font-light bg-black py-7 rounded-lg'>
            <Link color='secondary' href={'/about'}>LEARN MORE</Link>
          </Button>
        </div>
      </div>
      <div className='w-full bg-white py-56 flex justify-center'>
        <div className='text-black w-10/12 flex flex-col'>
          <h1 className='text-4xl font-playfair w-3/4'>
            SYMPHONY OF THE SEA
          </h1>
          <div className='flex gap-3 align-middle w-full'>
           <div className = 'w-11/12 py-44 rounded-xl' style={{
            backgroundImage: `url("/landingMenu1.webp")`,
            backgroundSize: 'cover',
            backgroundPositionX: '50%'
           }}/>
           <div className = 'w-11/12 py-44 rounded-xl' style={{
            backgroundImage: `url("/landingMenu2.webp")`,
            backgroundSize: 'cover'
           }}/>
            <div className = 'w-11/12 py-44 rounded-xl' style={{
            backgroundImage: `url("/landingMenu3.webp")`,
            backgroundSize: 'cover',
            backgroundPositionY: '30%'
           }}/>
          </div>
          <div className='text-end font-roboto font-light mt-3'>
            <Link href={'/menu'}>VIEW FULL MENU</Link>
          </div>
        </div>
      </div>
      <div className='relative'>
        <div style={{
          backgroundImage: `url("/landingSignUp.webp")`,
          backgroundSize: 'cover',
          backgroundPositionY: '90%',
          paddingBottom: '700px',
          width: '100%',
          opacity: '.3',
          zIndex: '-1'
        }} />
        <div className='flex flex-col overflow-visible w-11/12 px-32 py-16 z-10 absolute top-40'>
          <h1 className='text-6xl font-playfair font-light'>
            JOIN OUR CULINARY VOYAGE
          </h1>
          <h3 className='font-roboto font-light text-lg w-5/12 my-10'>
            Unlock exclusive offers and savored moments
          </h3>
          <Button color='secondary' className=' w-4/12 text-2xl font-roboto bg-transparent border-small border-white py-10 rounded'>
            <Link title='signUp' color='secondary' href={'/signUp'}>SIGN UP</Link>
          </Button>
        </div>
      </div>
      <div className='w-full bg-white py-40 flex justify-center'>
        <div className=' w-10/12 flex flex-col text-black'>
          <h1 className='text-6xl font-playfair mb-16'>LOCATIONS &amp; HOURS</h1>
          <div className='flex flex-wrap'>
            <div className = 'w-1/2 py-60 rounded-xl' style={{
              backgroundImage: `url("/landingMap.webp")`,
              backgroundSize: 'cover',
              backgroundPositionX: '50%'
            }}/>
            <div className='flex flex-col ml-16 gap-y-10 w-1/3'>
              <div>
                <h3 className='text-2xl font-playfair font-semibold'>ATLANTIC CITY</h3>
                <p className='text-large font-roboto'>1133 Boardwalk, Atlantic City, NJ 08401 +1 (609) 555-6789</p>
              </div>
              <div>
                <h3 className='text-xl font-roboto font-semibold'>MON - THURS</h3>
                <p className='text-large font-roboto'>5:30 PM — 10 PM</p>
              </div>
              <div>
                <h3 className='text-xl font-roboto font-semibold'>FRI - SUN</h3>
                <p className='text-large font-roboto'>5:30 PM — 12 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RestFooter/>
    </div>
  )
}
