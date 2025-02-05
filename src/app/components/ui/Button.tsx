interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel: string;
}
export const Button: React.FC<ButtonProps> = ({children, className, ariaLabel}) => {
  return (
    <button
      aria-labelledby={ariaLabel}      className={`buttonOrLink bg-accentGreen border-none hover:bg-green_600 ${className}`}
    >
      {children}
    </button>
  );
};