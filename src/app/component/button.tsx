import React from "react";

export interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  isDisable?: boolean;
}

export default function Button({
  className,
  children,
  onClick,
  isDisable,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isDisable}
      className={` p-2 rounded-full ${className} button-dice transition-colors ease-in-out duration-100`}
    >
      {children}
    </button>
  );
}
