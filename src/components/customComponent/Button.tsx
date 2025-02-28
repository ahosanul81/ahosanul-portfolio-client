import { ReactNode } from "react";

export default function Button({
  text,
  className,
  icon,
}: {
  text: string;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <button
      className={`primary-color bg-nav-bg   flex items-center gap-2 hover:bg-nav-bg hover:text-white ${className}`}
    >
      {text} {icon}
    </button>
  );
}
