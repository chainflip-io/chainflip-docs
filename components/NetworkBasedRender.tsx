import { useTheme } from "@/hooks/useTheme";
import React from "react";

interface SelectProps {
  options: Array<{ label: string; value: string }>;
  defaultValue: string;
  render: (value: string) => React.ReactNode;
}

export function NetworkBasedRender({
  options,
  defaultValue,
  render,
}: SelectProps) {
  const [selected, setSelected] = React.useState(defaultValue);
  const { isDark } = useTheme();

  return (
    <div className="my-4">
      <div className="flex mb-2">
        <div className="w-32">
          <label
            className={`block text-xs font-medium ${
              isDark ? "text-gray-400" : "text-gray-500"
            } mb-1`}
          >
            Select Network
          </label>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className={`block w-full px-2 py-1 rounded-md
              border ${isDark ? "border-gray-700" : "border-gray-200"}
              ${isDark ? "bg-gray-800" : "bg-gray-50"}
              ${isDark ? "text-gray-300" : "text-gray-600"}
              shadow-sm hover:border-indigo-400
              focus:outline-none focus:ring-1 focus:ring-indigo-400
              cursor-pointer
              text-xs`}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>{render(selected)}</div>
    </div>
  );
}
