import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  // typescript requires clarifying types of parameters
  className?: string; // '?' make it optional
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
