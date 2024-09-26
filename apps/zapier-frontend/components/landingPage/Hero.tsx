"use client";
import Image from "next/image";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { useRouter } from "next/navigation";
const Hero = () => {
  const router=useRouter();
  return (
    <div className=" flex justify-center items-center mt-20">
      <div className="flex w-[85%] ">
        <div className=" flex-1 p-10 w-full flex-col justify-center">
          <div className="text-7xl font-bold">Automate without limits</div>
          <div className="pt-5 text-2xl font-semibold">
            Turn chaos into smooth operations by automating workflows
            yourself—no developers, no IT tickets, no delays. The only limit is
            your imagination.
          </div>
          <div className="w-1/2 mt-10">
            <PrimaryButton onClick={() => {router.push('/signup')}} type="big">
              Start free with email
            </PrimaryButton>
          </div>
        </div>
        <div className="flex-1 p-10 w-full relative h-[500px]">
          <Image
            src={
              "https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726210651/Homepage%20%E2%80%94%20Sept%202024/homepage-hero_vvpkmi.png"
            }
            alt="image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
