import Link from "next/link";
import { ReactNode } from "react";

interface BaseTypography {
  text?: string;
  className?: string;

  children?: ReactNode;
  href?: string;
}

export const TitleTypography = ({ text, className }: BaseTypography) => {
  return <h1 className={`text-4xl font-bold ${className}`}>{text}</h1>;
};

export const SpanTypography = ({ text, className }: BaseTypography) => {
  return <span className={className}>{text}</span>;
};

export const LinkTypography = ({
  className,
  children,
  href,
}: BaseTypography) => {
  return (
    <Link
      href={href!}
      className={`hover:opacity-40 transition-all ${className}`}
    >
      {children}
    </Link>
  );
};
