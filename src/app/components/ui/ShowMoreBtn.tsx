interface ShowMoreBtnProps {
    children: React.ReactNode;
}
export const ShowMoreBtn: React.FC<ShowMoreBtnProps> = ({children}) => {
  return <button type="button" className="flex items-center justify-between gap-3 text-lg text-textLight boredr-none" >{children}</button>;
};