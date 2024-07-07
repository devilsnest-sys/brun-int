"use client";
import { useRouter } from "next/navigation";
import MyOutlinedButton from "@components/common/MyOutlinedButton";
import DetailsItem from "../DetailsItem";
import { ButtonType } from "@modals/common/common.types";
import { getUserIdToStorage } from "@services";
import { useEffect, useState } from "react";
import { getApi } from "@Repository/Api";

const AccountsDetails = () => {
  const [userDetails, setUserDetails] = useState({ data: {} });
  const [userid, setUserId] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const id = getUserIdToStorage();
      setUserId(id);
    }
  }, []);

  useEffect(() => {
    if (userid) {
      getApi({
        url: `api/v1/user/${userid}`,
        setResponse: setUserDetails,
      });
    }
  }, [userid]);

  const handleSignout = () => {
    localStorage.clear();
    router.replace("/login");
  };

  return (
    <div className="account__details flex flex-col gap-4 sm:gap-8">
      <h4 className="hidden md:block">ACCOUNT DETAILS</h4>
      <div className="flex flex-col gap-7">
        <DetailsItem label="FIRST NAME" value={userDetails.data.first_name} />
        <DetailsItem label="LAST NAME" value={userDetails.data.last_name} />
        <DetailsItem label="EMAIL" value={userDetails.data.email} />
        <MyOutlinedButton
          active={false}
          handleClick={handleSignout}
          className="!w-max !py-2 !px-8 md:!py-4 md:!px-16 m-auto md:m-0 !font-semibold"
          type={ButtonType.BUTTON}
        >
          SIGN OUT
        </MyOutlinedButton>
      </div>
    </div>
  );
};

export default AccountsDetails;
