import Image from "next/image";
import { SpanTypography } from "./base-typography";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BaseListProps {
  title: string;
  value: string | string[] | Record<string, string>;
  icon?: string;
  separator?: string;
  variant?: "default" | "badge";
}

export const BaseList = ({
  title,
  value,
  icon,
  separator = " | ",
  variant = "default",
}: BaseListProps) => {
  const displayValue = Array.isArray(value)
    ? value.join(separator)
    : typeof value === "object"
    ? Object.values(value).join(separator)
    : value;

  return (
    <div className="flex items-center">
      <div
        className={cn(
          "flex items-center gap-2",
          variant === "badge" && "items-start flex-col gap-1"
        )}
      >
        {icon && <Image src={icon} alt="icon-list" width={16} height={16} />}
        <SpanTypography text={`${title}:`} className="font-bold" />
        {variant === "default" && <SpanTypography text={displayValue} />}
        <div className="flex gap-1">
          {variant === "badge" &&
            Object.entries(value).map(([key, val]) => (
              <Badge key={key}>{val}</Badge>
            ))}
        </div>
      </div>
    </div>
  );
};
