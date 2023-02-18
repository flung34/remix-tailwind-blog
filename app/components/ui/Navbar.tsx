import type { Link } from "@remix-run/react";
import type NavLinks from "../NavLinks";


export interface NavbarProps {
  children: React.ReactNode;
} 

function Navbar({children}: NavbarProps) {
  return (
    <div className='w-full'>{children}</div>
  )
}

export default Navbar