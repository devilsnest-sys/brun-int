"use client";
import React, { useState } from "react";
import MyOutlinedButton from "../MyOutlinedButton";
import Insta from "@public/icons/footer/Insta";
import Facebook from "@public/icons/footer/Facebook";
import Twitter from "@public/icons/footer/Twitter";
import Pintrest from "@public/icons/footer/Pintrest";
import { ButtonType } from "@modals/common/common.types";
import Link from "next/link";
import { postApi } from "@Repository/Api";

const Footer = () => {
  const [email, setEmail] = useState("");

  const subscribeHandler = () => {
    postApi({
      url: "api/v1/newsletter/subscribe",
      payload: { email },
    });
  };

  return (
    <footer className="footer bg-[#F1F1F1] py-10 px-3 md:px-6 flex flex-wrap gap-5 items-center justify-center md:justify-between">
      <div className="footer__navlinks hidden md:flex flex-col text-sm">
        <Link href="/">ABOUT</Link>
        <Link href="/">PRIVACY POLICY</Link>
        <Link href="/">TERMS AND CONDITIONS</Link>
        <Link href="/">COOKIE SETTING</Link>
      </div>
      <div className="footer__input__container">
        <div className="input__container w-full md:max-w-[588px] flex items-center">
          <input
            type="email"
            name="emailnotification"
            id="emailnotification"
            placeholder="ENTER EMAIL"
            className="p-[10px] md:p-2 outline-none border border-black bg-transparent placeholder:text-black text-xs md:text-base w-full md:w-96 "
            onChange={(e) => setEmail(e.target.value)}
          />
          <MyOutlinedButton
            active={false}
            handleClick={() => subscribeHandler()}
            className="!p-[10px] !px-8"
            type={ButtonType.BUTTON}
          >
            SUBSCRIBE
          </MyOutlinedButton>
        </div>
      </div>
      <div className="footer__text__icons flex flex-col items-center sm:items-end gap-5">
        <div className="social__icons flex items-center gap-3">
          <Insta />
          <Facebook />
          <Twitter />
          <Pintrest />
        </div>
        <p className="footer__copyright__text text-xs sm:text-sm">
          Copyright © 2023 Brun. All Rights Reserved By Brun
        </p>
      </div>
    </footer>
  );
};

export default Footer;
