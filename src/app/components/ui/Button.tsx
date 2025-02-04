interface ButtonProps {
  children: React.ReactNode
  className?: string
}
export const Button: React.FC<ButtonProps> = ({children, className}) => {
  return (
    <button
      className={`buttonOrLink bg-accentGreen border-none hover:bg-green_600 ${className}`}
    >
      {children}
    </button>
  );
};