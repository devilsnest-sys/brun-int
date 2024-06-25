"use client";
import { setIsSidebarOpen } from "@libs/features/homepage/homepageSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

interface ISideNavbarItem {
    route: string;
    title: string;
}

const SideNavbarItem = ({ route, title }: ISideNavbarItem) => {

    const dispatch = useDispatch();
    const router = useRouter()

    const handleRoute = () => {
        dispatch(setIsSidebarOpen(false));
        router.push(route);
    }

    return (
        <div onClick={handleRoute} className="flex justify-between font-semibold">
            <div className="">
                {title}
            </div>
            <span className="material-symbols-rounded cursor-pointer">
                arrow_forward_ios
            </span>
        </div>
    )
}

export default SideNavbarItem;