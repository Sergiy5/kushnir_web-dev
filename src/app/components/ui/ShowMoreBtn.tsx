interface ShowMoreBtnProps {
  children: React.ReactNode;
  className: string;
  onClick: () => void;
}
export const ShowMoreBtn: React.FC<ShowMoreBtnProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-between gap-3 w-[125px] text-lg text-textLight boredr-none ${className}`}
    >
      {children}
    </button>
  );
};