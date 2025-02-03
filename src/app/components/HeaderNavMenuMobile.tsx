
import Link from "next/link";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";
import { NavItem } from "./HeaderNavItem";
import { MainLogo } from "./MainLogo";

interface HeaderNavMenuMobileProps {
  onClose: () => void;
}

export const HeaderNavMenuMobile: React.FC<HeaderNavMenuMobileProps> = ({
  onClose,
}) => {
  return (
    <nav onClick={onClose} className="relative z-20 flex flex-col justify-between items-center text-2xl text-textDark bg-bg gap-10 pt-14 pb-4">
        <MainLogo className="text-2xl" />
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
        <a href="#contacts" className="p-2">
          Contacts
        </a>
      </NavItem>

      <Button>Download CV</Button>
      <button
        type="button"
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