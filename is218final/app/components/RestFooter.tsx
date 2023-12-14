import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import React from 'react'

export default function RestFooter() {
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
                <Link href={'/'}>CONTACT</Link>
              </NavbarItem>
              <NavbarItem>
                <Link href={'/menu'}>RESERVE</Link>
              </NavbarItem>
              <NavbarItem>
                <Link href={'/'}>PRIVACY</Link>
              </NavbarItem>
              <NavbarItem>
                <Link href={'/'}>PARTNERS</Link>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
      </header>
      )
}