"use client";
import DesktopTabs from "@components/client/Accounts/DesktopTabs";
import MobileTabs from "@components/client/Accounts/MobileTabs";
import {
  setUserDetails,
  setWishList,
} from "@libs/features/account/accountSlice";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccessTokenFromStorage,
  useMakeAuthenticatedAPICall,
} from "@services";

const Account = () => {
  const [activeTab, setActiveTab] = React.useState(1);
  const router = useRouter();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.account.userDetails);
  const { callApi, data, error, loading } = useMakeAuthenticatedAPICall();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userId = getAccessTokenFromStorage();
      if (!userId) {
        router.replace("/login");
      } else {
        console.log("dsad");
      }
    }
  }, [router]);

  useEffect(() => {
    if (data) {
      if (data?.data) dispatch(setUserDetails(data.data));
      if (data?.data?.wishlist) dispatch(setWishList(data.data.wishlist));
    }
  }, [data, dispatch]);

  if (loading) {
    return (
      <div className="accountsPage__loading min-h-screen mt-28">Loading...</div>
    );
  }

  if (error.isError) {
    router.replace("/login");
    return <div>Error occurred: {error.message}</div>;
  }

  return (
    <main className="accountsPage min-h-screen mt-28">
      <div className="md:hidden">
        <MobileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="hidden md:flex">
        <DesktopTabs />
      </div>
    </main>
  );
};

export default Account;
