import Link from "next/link";

interface MainLogoProps {
  className?: string;
  classNameLink?: string;
}

export const MainLogo: React.FC<MainLogoProps> = ({ className, classNameLink }) => {
  
  return (
    <Link
      href="/"
      aria-label="Link to home page"
      className={`buttonOrLink flex my-auto ${classNameLink}`}
    >
      <span
        aria-labelledby="main logo"
        className={`font-bold leading-5 ${className}`}
      >
        {"<SerhiiKushnir/>"}
      </span>
    </Link>
  );
};
