import React, { ReactNode } from "react";

const PrimaryButton = ({
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
      className={`${type === "small" ? "text-sm" : "text-xl"} ${type === "small" ? "px-8 py-[6px]" : "px-10 py-3"} cursor-pointer hover:shadow-lg bg-amber-700 text-white rounded-full text-center font-semibold flex justify-center flex-col`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default PrimaryButton;
