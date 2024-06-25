import axios from "axios";
import toast from "react-hot-toast";
import { RootState } from "@libs/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IAddCustomerValues } from "@modals/admin";
import { useDispatch, useSelector } from "react-redux";
import network from "@services/network/network.service";
import { RoleEnum } from "@modals/account/account.types";
import { ISignupValuesDB } from "@modals/login/login.types";
import { EndpointService, addCustomerAPI } from "@services";
import { setIsLoadingFullScreenLoader } from "@libs/features/admin/adminAuth.slice";

export const useAddCustomer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isLoadingFullScreenLoader = useSelector(
    (state: RootState) => state.adminAuth.isLoadingFullScreenLoader
  );

  const handleAddCustomer = async (values: IAddCustomerValues, resetForm: () => void) => {
    setIsSubmitting(true);
    try {
      const payload: ISignupValuesDB = {
        first_name: values.firstname,
        last_name: values.lastname,
        email: values.email,
        password: values.password,
        role: RoleEnum.USER,
      };
      const response = await addCustomerAPI(payload);
      if (response?.statusCode === 201) {
        setIsSubmitting(false);
        toast.success("Customer added successfully");
        resetForm();
      }
    } catch (error) {
        const err = error as any
      setIsSubmitting(false);
      if(err?.response?.data?.statusCode === 400){
          console.log("customer already exists",error)
        toast.error('Customer already exists');
        return;
      }
      if (!axios.isCancel(error)) {
        console.log("error while adding product", error);
        toast.error("Session expired, please login again");
        router.replace("/admin/login");
      } else {
        console.log("error while adding product", error);
      }
    }
  };

  const handleCancel = () => {
    console.log("cancel");
  };

  useEffect(() => {
    const handleGetAllData = async (abortController: AbortController) => {
      dispatch(setIsLoadingFullScreenLoader(true));
      try {
        const isAdminLoggedIn = await network.get(
          EndpointService.isAdminLoggedIn,
          {
            signal: abortController.signal,
          }
        );
        if (isAdminLoggedIn.data.statusCode !== 200) {
          toast.error("Something went wrong, please login again");
          router.replace("/admin/login");
        }
        dispatch(setIsLoadingFullScreenLoader(false));
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.log("admin authorization failed", error);
          toast.error("Admin authentication failed, please login again");
          router.replace("/admin/login");
        } else {
          console.log(
            "admin authorization cancelled by abort AbortController",
            error
          );
        }
      }
    };

    const abortController = new AbortController();
    handleGetAllData(abortController);

    return () => {
      abortController.abort();
    };
  }, []);

  return {
    isSubmitting,
    handleAddCustomer,
    handleCancel,
    isLoadingFullScreenLoader,
  };
};
