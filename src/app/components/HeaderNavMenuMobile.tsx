import Link from "next/link";
import { Icon } from "./ui/Icon";
import { NavItem } from "./HeaderNavItem";
import { MainLogo } from "./MainLogo";
import { LinkBtn } from "./ui/LinkBtn";

interface HeaderNavMenuMobileProps {
  onClose: () => void;
}

export const HeaderNavMenuMobile: React.FC<HeaderNavMenuMobileProps> = ({
  onClose,
}) => {
  return (
    <nav
      aria-label="Nav Mobile menu"
      onClick={onClose}
      className="relative z-20 flex flex-col justify-between items-center text-2xl text-textDark bg-bg gap-10 px-4 pt-14 pb-4"
    >
      <MainLogo classNameLogo="text-2xl text-textDark" />
      <NavItem>
        <Link href="#projects" aria-label="Link to projects" className="p-2">
          Projects
        </Link>
      </NavItem>
      <NavItem>
        <Link href="#services" aria-label="Link to services" className="p-2">
          Services
        </Link>
      </NavItem>
      {/* GitHub */}
      <NavItem>
        <Link
          href="https://github.com/Sergiy5"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to GitHub"
          className="p-2"
        >
          GitHub
        </Link>
      </NavItem>

      <NavItem>
        <Link href="#contacts" aria-label="Link to contacts" className="p-2">
          Contacts
        </Link>
      </NavItem>
      {/* CV */}
      <LinkBtn
        href="cv/serhii_kushnir_full_stack_developer.pdf"
        ariaLabel="Download CV"
        clasName="downloadLinkBtn w-full flex"
      >
        Open CV
      </LinkBtn>
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute top-4 right-4"
      >
        <Icon
          id="icon-cross"
          width={24}
          height={24}
          className="text-textDark"
        />
      </button>
    </nav>
  );
};
