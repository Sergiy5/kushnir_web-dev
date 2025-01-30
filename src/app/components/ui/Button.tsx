interface ButtonProps {
    children: React.ReactNode
}
export const Button: React.FC<ButtonProps> = ({children}) => {
  return (
    <button
      className={`bg-accentGreen  text-lg font-bold leading-5 text-[black] min-w-[220px] h-[52px] w-[220px] cursor-pointer
     rounded-full border-none transition-all hover:bg-green_600`}
    >
      {children}
    </button>
  );
};