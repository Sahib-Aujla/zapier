import React from "react";

const ZapTable = () => {
  return (
    <div className="w-full">
      <div className="flex w-full">
        <div className="flex-1"></div>
        <div className="flex-1 text-lg font-semibold">Name</div>
        <div className="flex-1 text-lg font-semibold">Last Edit</div>
        <div className="flex-1 text-lg font-semibold">Running</div>
      </div>
      <div>Zaps</div>
    </div>
  );
};

export default ZapTable;
