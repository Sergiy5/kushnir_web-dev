interface MainLogoProps {
  className?: string;
}

export const MainLogo: React.FC<MainLogoProps> = ({ className }) => {
  
  return (
    <p aria-label="Main logo" className={`font-bold leading-5 ${className}`}>
      {"<SerhiiKushnir/>"}
    </p>
  );
};
