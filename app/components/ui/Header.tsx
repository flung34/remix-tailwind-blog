import type { NavLinksProps } from "../NavLinks";
import NavLinks from "../NavLinks";
import Navbar from "./Navbar";
import logo from "../../../public/assets/logo.png"

export interface HeaderProps extends NavLinksProps {
    user?: any;
    image?: string;

} 

function Header({links}: HeaderProps) {
  return (
    <div className="flex flex-col">
        <div className="flex max-w-[15rem] m-auto"><img src={logo} alt="our logo - to be changed"/></div>
        <div className="flex"><Navbar><NavLinks links={links}/></Navbar></div>
    </div>
  )
}

export default Header