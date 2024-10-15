import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../new-york/ui/dropdown-menu'

import { CircleUser, ShoppingCart } from 'lucide-react'
import { Button } from '../new-york/ui/button'
import Link from 'next/link'


const CartToggle = () => {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <Link href="/cart">
            <ShoppingCart className="h-5 w-5" />

          </Link>
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      {/* <DropdownMenuContent align="end" className='z-[999]'>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent> */}
    </DropdownMenu>

  )
}

export default CartToggle

