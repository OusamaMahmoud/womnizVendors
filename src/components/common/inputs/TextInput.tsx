import React from "react";

interface TextInputProps {
  placeholder?: string; // Placeholder text for the input
  icon?: JSX.Element; // Optional icon to display
  onChange?: (value: string) => void; // Callback for input value change
  value?: string; // Controlled value for the input
  type?: string; // Input type (e.g., "text", "search", etc.)
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder = "Enter text",
  icon,
  onChange,
  value,
  type = "text",
}) => {
  return (
    <div className="relative w-full max-w-xs">
      {icon && (
        <div className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 pointer-events-none ">
          {icon}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className={`input input-bordered shadow-lg w-full font-poppins pl-${
          icon ? "10" : "4"
        } focus:outline-none focus:ring focus:ring-[#037847]`}
      />
    </div>
  );
};

export default TextInput;
