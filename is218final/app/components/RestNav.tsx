import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import React from 'react'

export default function RestNav() {
    return (
    <header className='justify-between font-playfair'>
        <Navbar className='w-full p-10'>
            <NavbarContent>
              <NavbarBrand>
              <Link href={'/'}>AMOUR DE MER</Link>
              </NavbarBrand>
            </NavbarContent>
            <NavbarContent className='gap-10'>
              <NavbarItem>
                <Link href={'/about'}>ABOUT</Link>
              </NavbarItem>
              <NavbarItem>
                <Link href={'/menu'}>MENU</Link>
              </NavbarItem>
              <NavbarItem>
                <Link href={'/reservation'}>RESERVE</Link>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
      </header>
      )
}