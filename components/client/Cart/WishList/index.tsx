import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@libs/store";
import Delete from "@public/icons/common/Delete";
import { IAccountDetails, IWishList } from "@modals/account/account.types";
import {
  getAccessTokenFromStorage,
  getUserIdToStorage,
} from "@services/tokens/tokens.service";
import { accountApi } from "@services/client/account/account.service";
import {
  setOrderHistory,
  setUserDetails,
  setWishList,
} from "@libs/features/account/accountSlice";
import { useMakeAuthenticatedAPICall } from "@services";

const WishList = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userDetails = useSelector(
    (state: RootState) => state.account.userDetails
  );
  const wishlist = useSelector((state: RootState) => state.account.wishList);
  const { callApi, data, error, loading } =
    useMakeAuthenticatedAPICall<IAccountDetails>();

  useEffect(() => {
    const userId = getAccessTokenFromStorage();
    // if userId is null or error is there then redirect to login
    if (!userId) {
      router.replace("/login");
    }
  }, []);

  // setUserDetails from data when it is not null
  useEffect(() => {
    if (data) {
      if (data?.data) dispatch(setUserDetails(data.data));
      if (data?.data?.wishlist) dispatch(setWishList(data.data.wishlist));
      // undo this after new UI is completed
      // if (data?.data?.orders) dispatch(setOrderHistory(data.data.orders));
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error.isError) {
    router.replace("/login");
    return <div>Error occured: {error.message}</div>;
  }
  if (!data && !userDetails) return null;

  return (
    <section className="wishlist grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
      {wishlist.length > 0 ? (
        wishlist.map((item, idx) => <WishListCard key={idx} {...item} />)
      ) : (
        <p className="empty__cart">NO ITEMS FOUND IN WISHLIST.</p>
      )}
    </section>
  );
};

const WishListCard = ({ id, image, title, price }: IWishList) => {
  const handleDelete = () => {
    console.log("make an api call and delete this id from wishlist", id);
  };

  return (
    <div className="CartItem__text flex justify-between items-center md:w-96">
      <div className="wishlist__image__text flex gap-6 justify-center items-center">
        <Image src={image} alt="product image" width={136} height={190} />
        <div className="text__container max-w-[194px] flex flex-col gap-4">
          <p className="item__text text-sm">{title}</p>
          <p className="item__price ">₹ {price}</p>
        </div>
      </div>
      <Delete onClick={handleDelete} />
    </div>
  );
};

export default WishList;
