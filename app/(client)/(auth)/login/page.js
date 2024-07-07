"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  saveAccessTokenToStorage,
  saveRefreshTokenToStorage,
  saveUserIdToStorage,
} from "@services"; // Make sure this is correctly imported
import { useRouter } from "next/navigation";
import { postApi } from "@Repository/Api";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const payload = {
    email,
    password,
  };

  const resFunc = (res) => {
    const { accessToken, refreshToken, userId } = res.data;
    saveAccessTokenToStorage(accessToken);
    saveRefreshTokenToStorage(refreshToken);
    saveUserIdToStorage(userId);
    router.push("/");
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    postApi({
      url: "api/v1/user/login",
      payload,
      additionalFunctions: [resFunc],
    });
  };

  return (
    <main className="min-h-screen flex justify-center items-center">
      <section className="login w-64 sm:w-80 md:w-[649px]" id="login">
        <legend className="flex flex-col justify-center items-center mb-11 ">
          <h5>LOG IN INTO YOUR ACCOUNT</h5>
        </legend>

        <form className="flex flex-col text-sm w-full" onSubmit={handleLoginSubmit}>
          <div className="relative z-0 w-full">
            <input
              type="email"
              name="email"
              placeholder=""
              autoComplete="off"
              className="simpleinput block w-full bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              className="simpleinputlabel absolute duration-300 -top-1 -z-1 origin-0 text-gray-500"
            >
              Email Address
            </label>
          </div>

          <div className="relative z-0 w-full mt-8">
            <input
              type="password"
              name="password"
              placeholder=""
              autoComplete="off"
              className="simpleinput block w-full bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="password"
              className="simpleinputlabel absolute duration-300 -top-1 -z-1 origin-0 text-gray-500"
            >
              Password
            </label>
          </div>

          <Link href="/request-password-reset" className="underline decoration-1 mt-3">
            FORGET YOUR PASSWORD?
          </Link>

          <button type="submit" className="bg-black text-white px-24 py-4 w-max mx-auto mt-11 text-sm font-semibold">
            Log In
          </button>

          <Link href="/signup" className="underline decoration-1 text-center mt-3">
            CREATE AN ACCOUNT
          </Link>
        </form>
      </section>
    </main>
  );
};

export default Login;
