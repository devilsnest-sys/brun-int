"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navList } from "@contants/admin.constant";

const SideNavList = () => {

    return (
        <div className="navbar__list w-[70%] flex flex-col justify-center gap-5">
            {
                navList.map((item, index) => (
                    <SideNavListItem key={index} icon={item.icon} text={item.text} href={item.href} />
                ))
            }
        </div>
    )
};

const SideNavListItem = ({ icon, text, href }: { icon: React.ReactNode, text: string, href: string }) => {

    let pathname = usePathname();

    const path = pathname.split('/');
    if(path.length > 2) {
        pathname = `/${path[1]}/${path[2]}`;
    };
    const active = pathname === href;

    return (
        <Link href={href} className={`navbar__list__item rounded-lg text-center py-3 flex pl-7 items-center hover:bg-[#3C3C3C] gap-5 ${active && 'bg-[#3C3C3C]'}`}>
            {icon}
            <span>{text}</span>
        </Link>
    )
};

export default SideNavList;