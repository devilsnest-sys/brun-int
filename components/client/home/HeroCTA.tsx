'use client'

import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { IHeroCTA } from "@modals/home/home.types";
import { ButtonType } from "@modals/common/common.types";
import MyOutlinedButton from '@components/common/MyOutlinedButton'

const HeroCTA: NextPage<IHeroCTA> = ({ heading, description, route }) => {

  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  }

  return (
    <div className="flex flex-col items-center uppercase gap-10 text-center">
      <h1 className="text-xl md:text-4xl font-semibold">
        {heading}
      </h1>
      <p className="text-xs md:text-sm max-w-[681px]">
        {description}
      </p>
      <MyOutlinedButton handleClick={handleClick} active={false} className="!py-3 !px-20 font-bold " type={ButtonType.BUTTON}>SHOP NOW</MyOutlinedButton>
    </div>
  );
};

export default HeroCTA;
