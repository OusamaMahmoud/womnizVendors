import React from "react";

interface SelectInputProps {
  options: { value: string; label: string }[]; // Dynamic options for the select input
  placeholder?: string; // Placeholder text
  onChange?: (value: string) => void; // Callback for value change
  value?: string; // Controlled value
}

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  placeholder = "Select an option",
  onChange,
  value,
}) => {
  return (
    <div className="relative w-full max-w-xs">
      <select
        value={value}
        defaultValue={""}
        onChange={(e) => onChange?.(e.target.value)}
        className="select select-bordered shadow-lg w-full font-poppins focus:outline-none focus:ring focus:ring-primary-500"
      >
        <option value="" disabled >
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.697l3.71-3.47a.75.75 0 111.04 1.08l-4.2 3.93a.75.75 0 01-1.04 0l-4.2-3.93a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default SelectInput;
