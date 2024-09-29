"use client";
import React from "react";
import DarkButton from "./buttons/DarkButton";
import ZapTable from "./ZapTable";
import { useRouter } from "next/navigation";

//needs one button and one table
// one button to show create and one to show the zaps
const DashBoard = () => {
  const router=useRouter();
  return (
    <div className="">
      <div className="w-full flex flex-col justify-center items-center pt-16">
        <div className="flex max-w-2xl w-full justify-between">
          <div className="text-3xl font-bold">My Zaps</div>
          <div>
            <DarkButton type="big" onClick={() => {router.push('/zap/create')}}>
              + Create
            </DarkButton>
          </div>
        </div>
        <div className="max-w-2xl w-full pt-10">
          <ZapTable />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

// 3d4592
