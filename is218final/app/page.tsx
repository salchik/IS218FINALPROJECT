import Link from 'next/link';
import Navigation from './components/RestNav';

export default function Home() {
  return (
    <div className='min-w-full min-h-full'>
      <Navigation/>
      <div style={{
        backgroundImage: `url("/hero.png")`,
        backgroundSize: 'cover',
        height: '50vw'
      }}>

      </div>
    </div>
  )
}
