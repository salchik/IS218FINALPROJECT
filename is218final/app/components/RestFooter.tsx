import { Link, Image, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import React from 'react'

export default function RestFooter() {
    return (
    <footer className='justify-between font-playfair'>
        <Navbar className='w-full p-10'>
            <NavbarContent>
              <NavbarBrand>
              <Link href={'/'}>AMOUR DE MER</Link>
              </NavbarBrand>
            </NavbarContent>
            <NavbarContent className='gap-10'>
              <NavbarItem>
                <Link href={'/'}>CONTACT</Link>
              </NavbarItem>
              <NavbarItem>
                <Link href={'/menu'}>RESERVE</Link>
              </NavbarItem>
              <NavbarItem>
                <Link href={'/'}>PRIAVACY</Link>
              </NavbarItem>
              <NavbarItem>
                <Link href={'/'}>PARTNERS</Link>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
          <div className='flex justify-center gap-10 pb-10'>
            <a href='http://www.facebook.com'>
                <Image src='/facebookIcon.svg' width={50}/>
            </a>
            <a href='http://www.instagram.com'>
                <Image src='/instagramIcon.svg' width={50}/>
            </a>
          </div>
      </footer>
      )
}