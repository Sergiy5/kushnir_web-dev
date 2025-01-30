import React from "react";

interface IconProps {
  id: string;
  width?: number;
  height?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  id,
  width = "24px",
  height = "24px",
  className,
}) => {

  return (
    <svg width={width} height={height} className={`${className}`}>
      <use xlinkHref={`/icons/sprite.svg#${id}`} />
    </svg>
  );
};
