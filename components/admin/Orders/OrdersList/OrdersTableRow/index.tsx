'use client'
import MyOutlinedButton from "@components/common/MyOutlinedButton"
import { textColors } from "../../OrdersFilter/SearchDateAndStatus/StatusFilter";
import { IOrdersTableRow } from "@modals/admin";
import { useRouter } from "next/navigation";



const OrdersTableRow = ({id, quantity, name, date, price, status}: IOrdersTableRow) => {

    const router = useRouter()

    const handleViewOrder = (id: string) => {
        router.push(`/admin/orders/${id}`)
    }

    return (
        <div className="orders__table-row grid grid-cols-7 justify-between items-center">
            <p className="orders__table-item"># {id}</p>
            <p className="orders__table-item">{quantity}</p>
            <p className="orders__table-item">{name}</p>
            <p className="orders__table-item">{date}</p>
            <p className="orders__table-item">₹ {price}</p>
            <p className={`orders__table-item ${textColors[status]}`}>{status}</p>
            <div className="orders__table-item flex items-center">
                <MyOutlinedButton handleClick={() => handleViewOrder(id)} className='border !border-[#D5D5D5] p-2'>
                    VIEW <span className="material-symbols-rounded scale-50">
                        arrow_forward_ios
                    </span>
                </MyOutlinedButton>
            </div>
        </div>
    )
}

export default OrdersTableRow