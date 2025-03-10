import Link from "next/link";
import { NavItem } from "./HeaderNavItem";

export const HeaderNavMenu: React.FC = () => {
  
  return (
    <nav
      aria-label="Nav menu"
      className="hidden md:flex justify-between items-center text-textDark gap-5 lg:gap-10"
    >
      <NavItem>
        <Link aria-label="link to projects" href="/#projects" className="p-2">
          Projects
        </Link>
      </NavItem>
      <NavItem>
        <Link aria-label="Link to services" href="/#services" className="p-2">
          Services
        </Link>
      </NavItem>
      <NavItem>
        <Link
          aria-label=" Link to GitHub"
          href="https://github.com/Sergiy5"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
        >
          GitHub
        </Link>
      </NavItem>
      <NavItem>
        <Link
          href="cv/Serhii_Kushnir_Full_Stack_Developer.pdf"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Link to Serhii Kishnir CV"
          className="p-2"
        >
          My CV
        </Link>
      </NavItem>
      <NavItem>
        <Link
          aria-label="Link to contacts section"
          href="/#contacts"
          className="p-2"
        >
          Contacts
        </Link>
      </NavItem>
    </nav>
  );
};
