import Link from "next/link";

export const Header: React.FC = () => {

    return (
      <header className="sticky top-0 z-50 flex justify-between items-center bg-bg/50 backdrop-blur-md w-full">
        <div className="container flex justify-between items-center flex-row mx-auto py-5">
          <p className="text-lg font-bold leading-5 text-textDark">
            &lt;SerhiiKushnir&gt;
          </p>
          <nav className="flex justify-start items-center text-textDark gap-10">
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
        </div>
      </header>
    );
}
interface NavItemProps {
    children: React.ReactNode;
}

export const NavItem: React.FC<NavItemProps> = ({children }) => {
  return (
    <div className="relative group flex justify-center items-center hover:cursor-pointer" >
      <span className={`absolute z-10 top-4 -left-1 w-2 h-2  transition-all duration-350 easy-in-out bg-transparent group-hover:bg-green_500 group-active:bg-green_600`} ></span>
      {children}
    </div>
  );
}