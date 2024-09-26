"use client";
import React from "react";
import LinkButton from "./buttons/LinkButton";
import PrimaryButton from "./buttons/PrimaryButton";
import { useRouter } from "next/navigation";
const Appbar = () => {
  const router=useRouter();

  return (
    <div className="flex justify-between border-b py-3 px-5">
      <div className="pl-4 text-2xl font-extrabold flex flex-col justify-center">
        Zapier
      </div>
      <div className="flex flex-row gap-2 px-2">
        <LinkButton onClick={() => {router.push('/signin')}}>Log In</LinkButton>
        <PrimaryButton onClick={() => {router.push('signup')}}>Sign Up</PrimaryButton>
      </div>
    </div>
  );
};

export default Appbar;
