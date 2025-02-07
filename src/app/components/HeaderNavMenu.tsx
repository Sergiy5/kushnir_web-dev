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
      <Link href="cv/Serhii_Kushnir_Full_Stack_Developer.pdf" rel="noopener noreferrer" target="_blank" aria-labelledby="Serhii Kishnir CV" className="p-2">My CV</Link>
    </NavItem>
    <NavItem>
      <a href="#contacts" className="p-2">
        Contacts
      </a>
    </NavItem>
  </nav>
);
}
// href={href}
//       target="_blank"
//       download={download}
//       rel="noopener noreferrer"
//       aria-labelledby={ariaLabel}