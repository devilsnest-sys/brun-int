import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IAdminLoginValues } from "@modals/admin";
import network from "@services/network/network.service";
import { setIsLoadingFullScreenLoader } from "@libs/features/admin/adminAuth.slice";
import { EndpointService, saveAccessTokenToStorage, saveRefreshTokenToStorage, saveUserIdToStorage } from "@services";

export const useAdminLogin = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleAdminLoginSubmit = async (values: IAdminLoginValues) => {
        setIsLoading(true);
        const payload = {
            email: values.email,
            password: values.password
        }
        try {
            const response = await network.post(EndpointService.adminLogin, payload);
            const { success, message } = response.data;
            if (!success) {
                console.error('admin login', response);
                toast.error(message);
                return;
            }
            const { accessToken, refreshToken, userId } = response.data.data;
            saveAccessTokenToStorage(accessToken);
            saveRefreshTokenToStorage(refreshToken);
            saveUserIdToStorage(userId)
            toast.success(message);
            router.replace('/admin');
        } catch (err) {
            console.error('admin login', err);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        dispatch(setIsLoadingFullScreenLoader(false));
        return () => {
            dispatch(setIsLoadingFullScreenLoader(true));
        }
    }, [])

    return {
        handleAdminLoginSubmit,
        isLoading
    }
}