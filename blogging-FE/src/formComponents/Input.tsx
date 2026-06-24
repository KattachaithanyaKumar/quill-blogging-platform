import React from "react";

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rightLabel?: React.ReactNode;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  rightLabel,
  error,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {(label || rightLabel) && (
        <div className="flex items-center justify-between">
          {label && (
            <label className="text-sm font-medium text-[#1a1a1a]">
              {label}
            </label>
          )}
          {rightLabel && (
            <div className="text-xs text-gray-400">{rightLabel}</div>
          )}
        </div>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors ${
          error
            ? "border-red-400 focus:border-red-500"
            : "border-gray-200 focus:border-[#1a1a1a]"
        }`}
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
