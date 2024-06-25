"use client";
import React from "react";
import ProductCard from "../ProductCard";
import product from "@public/assets/product.jpg";
import MyOutlinedButton from "@components/common/MyOutlinedButton";
import TabsBody from "@components/common/Tabs/TabsBody/TabsBody";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@libs/store";
import { setActiveTab } from "@libs/features/tabs/tabsSlice";
import { ButtonType } from "@modals/common/common.types";

const ProductReviewAndLook = ({ productDetail }) => {
  const dispatch = useDispatch();
  const { activeTab } = useSelector((state: RootState) => state.tabs);

  const handleClick = (index: number) => {
    dispatch(setActiveTab(index));
  };

  return (
    <section
      className="flex flex-col justify-center md:flex-row md:justify-between max-w-[980px] mx-auto mt-10 md:mt-20"
      id="ProductReviewAndLook"
    >
      <div className="product__details__tab">
        <div className="tabs__header flex items-center gap-3 mb-3">
          <MyOutlinedButton
            active={activeTab === 0}
            handleClick={() => handleClick(0)}
            type={ButtonType.BUTTON}
          >
            DESCRIPTION
          </MyOutlinedButton>
          {/* <MyOutlinedButton
            active={activeTab === 1}
            handleClick={() => handleClick(1)}
            type={ButtonType.BUTTON}
          >
            DELIVERY
          </MyOutlinedButton> */}
          <MyOutlinedButton
            active={activeTab === 2}
            handleClick={() => handleClick(2)}
            type={ButtonType.BUTTON}
          >
            REVIEWS
          </MyOutlinedButton>
        </div>
        <div className="tabs__body text-sm">
          <TabsBody show={activeTab === 0}>
            <p> {productDetail?.description} </p>
          </TabsBody>
          {/* <TabsBody show={activeTab === 1}>
            <p>Product delivery</p>
          </TabsBody> */}
          <TabsBody show={activeTab === 2}>
            <p>Product reviews</p>
          </TabsBody>
        </div>
      </div>
      {/* <div className="product__complete__look mt-4 md:mt-0">
        <h4 className="text-base">COMPLETE THE LOOK</h4>
        <ProductCard
          image={product}
          name="SHADED JEANS"
          price={2900.0}
          slug="shaded-jeans"
        />
      </div> */}
    </section>
  );
};

export default ProductReviewAndLook;
