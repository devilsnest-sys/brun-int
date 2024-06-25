"use client";

import React from "react";
import { Formik, Form } from "formik";
import Link from "next/link";
import MyTextInput from "@components/common/MyTextInput";
import {
  loginApi,
  loginValidationSchema,
  useMakeUnauthenticatedAPICall,
} from "@services";
import { loginInitialValues } from "@contants/login.constant";
import MyButton from "@components/common/MyButton";
import { ButtonType } from "@modals/common/common.types";
import { useRouter } from "next/navigation";
import { ILoginApiResponse, ILoginValues } from "@modals/login/login.types";
import MyError from "@components/common/MyError";

const Login = () => {
  const router = useRouter();
  const { callApi, error } = useMakeUnauthenticatedAPICall();

  const handleLoginSubmit = async (values: ILoginValues) => {
    const payload = {
      email: values.email,
      password: values.password,
    };
    try {
      const result: ILoginApiResponse = await callApi(
        loginApi(payload, router)
      );
    } catch (err) {
      console.error(err, error);
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-center">
      <section className="login w-64 sm:w-80 md:w-[649px]" id="login">
        <legend className="flex flex-col justify-center items-center mb-11 ">
          <h5>LOG IN INTO YOUR ACCOUNT</h5>
          {error.isError && <MyError errorMessage={error.message} />}
        </legend>
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleLoginSubmit}
        >
          <Form className="flex flex-col text-sm w-full">
            <MyTextInput
              id="email"
              label="Email Address"
              name="email"
              type="email"
            />
            <MyTextInput
              id="password"
              label="Password"
              name="password"
              type="password"
              className="mt-8"
            />
            <Link
              href="/request-password-reset"
              className="underline decoration-1 mt-3"
            >
              FORGET YOUR PASSWORD?
            </Link>

            <MyButton label="LOG IN" type={ButtonType.SUBMIT} />

            <Link
              href="/signup"
              className="underline decoration-1 text-center mt-3"
            >
              CREATE AN ACCOUNT
            </Link>
          </Form>
        </Formik>
      </section>
    </main>
  );
};

export default Login;
