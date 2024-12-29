import React from "react";

interface ButtonProps {
  text?: string; // Button text
  icon?: JSX.Element; // Optional icon
  onClick?: () => void; // Click event handler
  variant?: "primary" | "secondary" | "danger"; // Button style variants
  isFullWidth?: boolean; // If true, the button spans full width
  disabled?: boolean; // If true, the button is disabled
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  onClick,
  variant = "primary",
  isFullWidth = false,
  disabled = false,
}) => {
  // Define base and variant-specific classes
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-200";
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };
  const disabledClasses = "opacity-50 cursor-not-allowed";
  const fullWidthClass = isFullWidth ? "w-full" : "";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${
        disabled ? disabledClasses : ""
      } ${fullWidthClass}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
