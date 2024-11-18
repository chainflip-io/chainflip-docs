import classNames from "classnames";
import { InformationIcon, WarningTriangleIcon, ForbidIcon } from "@/icons";
import { useTheme } from "@/hooks/useTheme";

type CalloutType = "info" | "warning" | "error";

export const Callout = ({
  type,
  children,
}: {
  type: CalloutType;
  children: React.ReactNode;
}) => {
  const { isDark } = useTheme();

  return (
    <div
      className={classNames(
        `callout-container custom-callout flex items-center space-x-2 border rounded-md p-2 font-interMedium my-4 text-[14px]`,
        type === "info" &&
          isDark &&
          "text-cf-blue-2 bg-cf-blue-5 border-cf-blue-2/20",
        type === "info" &&
          !isDark &&
          "text-cf-blue-1 bg-cf-blue-1/20 border-cf-blue-1/20",
        type === "warning" &&
          isDark &&
          "text-cf-orange-1 bg-cf-orange-4 border-cf-orange-1/20",
        type === "warning" &&
          !isDark &&
          "text-[#F09600] bg-[#F7B955]/20 border-[#F7B955]/20",
        type === "error" &&
          isDark &&
          "text-cf-red-1 bg-cf-red-4 border-cf-red-1/20",
        type === "error" &&
          !isDark &&
          "text-cf-red-1 bg-cf-red-1/20 border-cf-red-1/20"
      )}
    >
      <div className="self-start mt-[3px]">
        {type === "info" && <InformationIcon />}
        {type === "warning" && <WarningTriangleIcon />}
        {type === "error" && <ForbidIcon />}
      </div>
      <div className="callout-content">{children}</div>
    </div>
  );
};
