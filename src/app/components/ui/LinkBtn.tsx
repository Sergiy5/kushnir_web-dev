import Link from "next/link";

interface LinkBtnProps {
  children?: React.ReactNode;
  clasName?: string;
  href: string;
}
export const LinkBtn: React.FC<LinkBtnProps> = ({
  children,
  clasName,
  href,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`buttonOrLink hover:bg-textLight/10 ${clasName}`}
    >
      {children}
    </Link>
  );
};
