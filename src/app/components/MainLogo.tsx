import Link from "next/link";

interface MainLogoProps {
  className?: string;
}

export const MainLogo: React.FC<MainLogoProps> = ({ className }) => {
  
  return (
    <Link
      href="/"
      aria-label="Link to home page"
      className="buttonOrLink"
    >
      <span aria-labelledby="main logo" className={`font-bold leading-5 ${className}`}>
        {"<SerhiiKushnir/>"}
      </span>
    </Link>
  );
};
