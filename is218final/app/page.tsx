import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-w-full min-h-full'>
      <header className='justify-between'>
        <Navbar className='w-full p-10'>
            <NavbarContent>
              <NavbarBrand>
              <Link href={'/'}>AMOUR DE MER</Link>
              </NavbarBrand>
            </NavbarContent>
            <NavbarContent className='gap-10'>
              <NavbarItem>
                <Link href={'/'}>ABOUT</Link>
              </NavbarItem>
              <NavbarItem>
                <Link href={'/menu'}>MENU</Link>
              </NavbarItem>
              <NavbarItem>
                <Link href={'/'}>RESERVE</Link>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
      </header>
      <div style={{
        backgroundImage: `url("/hero.png")`,
        backgroundSize: 'cover',
        height: '50vw'
      }}>

      </div>
    </div>
  )
}
