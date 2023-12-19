import { Link, Image, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import React from 'react'

export default function RestFooter() {
    return (
    <footer className='justify-between font-playfair'>
        <Navbar className='w-full p-10 bg-black'>
            <NavbarContent>
              <NavbarBrand>
              <Link color='secondary' href={'/'}>AMOUR DE MER</Link>
              </NavbarBrand>
            </NavbarContent>
            <NavbarContent className='gap-10' justify='end'>
            <NavbarItem>
                <Link color='secondary' href={'/about'}>ABOUT</Link>
              </NavbarItem>
              <NavbarItem>
                <Link color='secondary' href={'/menu'}>MENU</Link>
              </NavbarItem>
              <NavbarItem>
                <Link color='secondary' href={'/reservation'}>RESERVE</Link>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
          <div className='flex justify-center gap-10 pb-10'>
            <a href='http://www.facebook.com'>
                <Image src='/facebookIcon.svg' alt='facebook logo' width={50}/>
            </a>
            <a href='http://www.instagram.com'>
                <Image src='/instagramIcon.svg' alt='instagram logo'width={50}/>
            </a>
          </div>
      </footer>
      )
}