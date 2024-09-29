import React, { ReactNode } from "react";

const DarkButton = ({
  children,
  onClick,
  type = "small",
}: {
  children: ReactNode;
  onClick: () => void;
  type?: "small" | "big";
}) => {
  return (
    <div
      className={`${type === "small" ? "text-sm" : "text-xl"} ${type === "small" ? "px-8 py-[6px]" : "px-10 py-3"} cursor-pointer hover:shadow-lg bg-purple-500 hover:bg-purple-700 text-white rounded text-center font-semibold flex justify-center flex-col`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default DarkButton;
