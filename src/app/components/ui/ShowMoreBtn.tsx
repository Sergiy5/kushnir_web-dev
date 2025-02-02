interface ShowMoreBtnProps {
  children: React.ReactNode;
  onClick: () => void;
}
export const ShowMoreBtn: React.FC<ShowMoreBtnProps> = ({ children, onClick }) => {
  

  return <button type="button" onClick={onClick} className="flex items-center justify-between gap-3 text-lg text-textLight boredr-none" >{children}</button>;
};