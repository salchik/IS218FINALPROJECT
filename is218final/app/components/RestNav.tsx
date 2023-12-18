import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import React from 'react'

export default function RestNav() {
    return (
    <header className='justify-between font-playfair'>
        <Navbar className='w-full p-10 bg-black'>
            <NavbarContent>
              <NavbarBrand>
              <Link color='secondary' href={'/'}>AMOUR DE MER</Link>
              </NavbarBrand>
            </NavbarContent>
            <NavbarContent className='gap-10' justify='end'>
              <NavbarItem>
                <Link  color='secondary' href={'/about'}>ABOUT</Link>
              </NavbarItem>
              <NavbarItem>
                <Link color='secondary' href={'/menu'}>MENU</Link>
              </NavbarItem>
              <NavbarItem>
                <Link color='secondary' href={'/reservation'}>RESERVE</Link>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
      </header>
      )
}