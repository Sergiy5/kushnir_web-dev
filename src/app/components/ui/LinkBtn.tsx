import Link from "next/link";

interface LinkBtnProps {
  children?: React.ReactNode;
  clasName?: string;
  href: string;
  ariaLabel: string;
  download?: boolean;
}
export const LinkBtn: React.FC<LinkBtnProps> = ({
  children,
  clasName,
  href,
  ariaLabel,
  download,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      download={download}
      rel="noopener noreferrer"
      aria-labelledby={ariaLabel}
      className={`buttonOrLink ${clasName}`}
    >
      {children}
    </Link>
  );
};
