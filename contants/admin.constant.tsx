import { INavList } from "@modals/admin/adminLogin.types";


export const navList: INavList[] = [
    {
        icon: <span className="material-symbols-rounded">
            grid_view
        </span>, text: 'Dashboard', href: '/admin'
    },
    {
        icon: <span className="material-symbols-rounded">
            shopping_bag
        </span>, text: 'Products', href: '/admin/products'
    },
    {
        icon: <span className="material-symbols-rounded">
            inventory_2
        </span>, text: 'Orders', href: '/admin/orders'
    },
    {
        icon: <span className="material-symbols-rounded">
            group
        </span>, text: 'Customers', href: '/admin/customers'
    },
    {
        icon: <span className="material-symbols-rounded">
            settings
        </span>, text: 'Settings', href: '/admin/settings'
    },
]