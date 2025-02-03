interface MainLogoProps {
  className?: string;
}

export const MainLogo: React.FC<MainLogoProps> = ({ className }) => {
  return (
    <p className={`font-bold leading-5 text-textDark ${className}`}>
      {"<SerhiiKushnir/>"}
      {/* &lt;SerhiiKushnir/&gt; */}
    </p>
  );
};
