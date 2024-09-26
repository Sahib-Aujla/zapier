"use client";
import React, { useState } from "react";
import { CheckFeature } from "./CheckFeature";
import { Input } from "./Input";
import PrimaryButton from "./buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import axios from "axios";
const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex w-full justify-center items-center ">
      <div className="w-[80%] flex justify-center pt-[5rem] max-w-4xl ">
        <div className="flex-1 pr-10  mt-12 flex flex-col justify-center">
          <div className="font-semibold text-3xl pb-4">
            Join millions worldwide who automate their work using Zapier.
          </div>
          <div className="pb-6 pt-4">
            <CheckFeature label={"Easy setup, no coding required"} />
          </div>
          <div className="pb-6">
            <CheckFeature label={"Free forever for core features"} />
          </div>
          <CheckFeature label={"14-day trial of premium features & apps"} />
        </div>
        <div className="flex-1 pt-6 pb-6 mt-12 px-4 border rounded">
          <Input
            label={"Name"}
            placeholder="Your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label={"Email"}
            type="text"
            placeholder="Your Email"
          ></Input>
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label={"Password"}
            type="password"
            placeholder="Password"
          ></Input>

          <div className="pt-4">
            <PrimaryButton
              onClick={async () => {
                const formData = new FormData();
                formData.append("name", name);
                formData.append("email", email);
                formData.append("password", password);
                const response = await axios.post(
                  new String(process.env.NEXT_PUBLIC_BACKEND_URL) as string,
                  formData
                );
                const data = await response.data;
                console.log(data);
                router.push("/signin");
              }}
              type="big"
            >
              Get started free
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
