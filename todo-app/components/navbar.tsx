"use client"

import {Navbar,NavbarBrand,NavbarContent,NavbarItem} from "@heroui/navbar";
import {Link} from '@heroui/link'
import {Button} from "@heroui/button";
export default function NavbarComponent({open}:{open:()=>void}){
    return(
        <>
          <Navbar className="block"  isBordered>
      <NavbarContent  className="hidden sm:flex gap-4" justify="center">
       <NavbarItem>
         <h2>My Todo app</h2>
       </NavbarItem>
     <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
            <Button onPress={open} color="primary">
                Create task
            </Button>
        </NavbarItem>
      </NavbarContent>
     
    </Navbar>
        </>
    )
    
}