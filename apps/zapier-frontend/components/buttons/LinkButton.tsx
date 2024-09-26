import { ReactNode } from "react";
export default function LinkButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <div
      className=" flex flex-col justify-center items-center cursor-pointer font-light hover:bg-slate-100 px-2 py-2 text-sm rounded"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
