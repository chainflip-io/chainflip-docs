import React from "react";
import { Check, Copy } from "lucide-react"; // Make sure to install lucide-react
import { useTheme } from "nextra-theme-docs";

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  copyable?: boolean;
  className?: string;
}

export function CodeBlock({
  children,
  language = "bash",
  copyable = true,
  className = "",
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const handleThemeChange = () => {
      if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          setIsDark(savedTheme === 'dark');
        } else if (resolvedTheme) {
          setIsDark(resolvedTheme === 'dark');
        } else {
          setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
      }
    };

    handleThemeChange();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(handleThemeChange);

    return () => mediaQuery.removeListener(handleThemeChange);
  }, [resolvedTheme]);

  const handleCopy = async () => {
    if (typeof children !== "string") return;

    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div className="relative my-4">
      <pre
        className={`rounded-lg ${
          isDark ? "bg-gray-900" : "bg-gray-100"
        } p-4 overflow-x-auto ${className}`}
      >
        <code
          className={`language-${language} text-sm whitespace-pre-wrap break-words ${
            isDark ? "text-gray-100" : "text-gray-800"
          }`}
        >
          {children}
        </code>
      </pre>
      {copyable && (
        <button
          onClick={handleCopy}
          className={`absolute top-3 right-3 p-2 rounded-md
            ${
              isDark
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-200 hover:bg-gray-300"
            }
            ${isDark ? "text-gray-300" : "text-gray-600"}
            transition-colors`}
          title="Copy to clipboard"
        >
          {copied ? (
            <Check size={16} className="text-green-500" />
          ) : (
            <Copy size={16} />
          )}
        </button>
      )}
    </div>
  );
}
