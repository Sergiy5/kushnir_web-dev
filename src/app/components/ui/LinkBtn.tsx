import Link from "next/link";

interface LinkBtnProps {
  children?: React.ReactNode;
  clasName?: string;
  href: string;
  ariaLabel: string;
}
export const LinkBtn: React.FC<LinkBtnProps> = ({
  children,
  clasName,
  href,
  ariaLabel,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-labelledby={ariaLabel}
      className={`buttonOrLink hover:bg-textLight/10 ${clasName}`}
    >
      {children}
    </Link>
  );
};
