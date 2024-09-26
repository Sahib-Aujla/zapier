import { ReactNode } from "react";
export default function LinkButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return <div onClick={onClick}>{children}</div>;
}
