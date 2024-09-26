"use client";
import React, { useState } from "react";
import { Input } from "./Input";
import PrimaryButton from "./buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import axios from "axios";

const Signin = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="flex w-full justify-center items-center ">
      <div className="w-[80%] flex justify-center pt-[5rem] max-w-4xl">
        <div className="flex-1 pr-10  mt-12 flex flex-col justify-center">
          <div className="font-semibold text-3xl pb-4">
            Automate across your teams
          </div>
          <div className="font-semibold text-xl pb-4">
            Zapier Enterprise empowers everyone in your business to securely
            automate their work in minutes, not months—no coding required.
          </div>
        </div>
        <div className="flex-1 pt-6 pb-6 mt-12 px-4 border rounded">
          <Input
            label="Email"
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="pt-4">
            <PrimaryButton
              onClick={async () => {
                try {
                  const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/signin`,
                    {
                      username: email,
                      password,
                    }
                  );
                  localStorage.setItem("token", response.data.token);
                  router.push("/dashboard");
                } catch (error) {
                  console.log(error);
                }
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

export default Signin;
