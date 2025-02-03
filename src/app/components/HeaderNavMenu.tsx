import Link from "next/link";
import { NavItem } from "./HeaderNavItem";

export const HeaderNavMenu:React.FC =()=>{ return (
  <nav className="hidden md:flex justify-between items-center text-textDark gap-5 lg:gap-10">
    <NavItem>
      <a href="#projects" className="p-2">
        Projects
      </a>
    </NavItem>
    <NavItem>
      <a href="#services" className="p-2">
        Services
      </a>
    </NavItem>
    <NavItem>
      <Link
        href="https://github.com/Sergiy5"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2"
      >
        GitHub
      </Link>
    </NavItem>
    <NavItem>
      <p className="p-2">My CV</p>
    </NavItem>
    <NavItem>
      <a href="#contacts" className="p-2">
        Contacts
      </a>
    </NavItem>
  </nav>
);}