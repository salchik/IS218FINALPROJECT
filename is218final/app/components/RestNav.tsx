import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import React from 'react'

export default function RestNav() {
    return (
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
      )
}