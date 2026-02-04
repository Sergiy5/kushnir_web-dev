import Link from "next/link";
import { NavItem } from "./HeaderNavItem";

export const HeaderNavMenu: React.FC = () => {
  
  return (
    <nav
      aria-label="Nav menu"
      className="hidden md:flex justify-between items-center text-textDark gap-5 lg:gap-10"
    >
      <NavItem>
        <a aria-label="link to projects" href="#projects" className="p-2">
          Projects
        </a>
      </NavItem>
      <NavItem>
        <a aria-label="Link to services" href="#services" className="p-2">
          Services
        </a>
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
          href="cv/serhii_kushnir_fullstack_developer.pdf"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Link to Serhii Kishnir CV"
          className="p-2"
        >
          My CV
        </Link>
      </NavItem>
      <NavItem>
        <a
          aria-label="Link to contacts section"
          href="#contacts"
          className="p-2"
        >
          Contacts
        </a>
      </NavItem>
    </nav>
  );
};
