import React from "react";
type ButtonProps = {
  small?: boolean;
  gray?: boolean;
  className?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({
  small = false,
  gray = false,
  className = "",
  ...props
}: ButtonProps) => {
  const sizeClass = small ? "px-2 py-1" : "px-4 py-2 font-bold";
  const colorClass = gray
    ? "text-white bg-gray-400 hover:bg-gray-300 focus-visible:bg-gray-300"
    : "text-white bg-blue-500 hover:bg-blue-400 focus-visible:bg-blue-400";
  return (
    <button
      className={`rounded-full transition-colors duration-200 
      disabled:cursor-not-allowed disabled:opacity-50 ${sizeClass} ${colorClass} ${className}`}
      {...props}
    ></button>
  );
};
