import React from 'react'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export const NavbarApp = () => {
  return (
    <Navbar maxWidth={'full'}>
      <NavbarBrand >
        <p className="font-bold text-inherit">MoneyManager</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <p className="font-bold text-inherit">Hi Fariska!</p>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
