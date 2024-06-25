import React from 'react'
import { useRouter } from 'next/navigation'
// import product from "@public/assets/product.jpg"
import { ButtonType } from '@modals/common/common.types'
import { EOrderStatus, IOrderHistory } from '@modals/account/account.types'
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import { RETURNDAYSLEFT } from '@contants'

// Function to determine the text based on status and return days
const getStatusText = (status: EOrderStatus, returnDaysLeft: number = RETURNDAYSLEFT) => {
  switch (status) {
    case 'shipped':
      return 'CANCEL ORDER';
    case 'delivered':
      if (returnDaysLeft > 0) {
        return 'RETURN ORDER';
      } else {
        return 'REORDER';
      }
    case 'returned':
      return 'CANCEL RETURN';
    default:
      return '';
  }
};

const OrderCard = ({ id, order_status, created_at }: IOrderHistory) => {

  const router = useRouter();

  const handleViewProduct = () => {
    router.push(`/account/order/${id}`)
  }

  const handleCancelOrder = () => {
    console.log('Cancel Order');
  }

  const handleReturnOrder = () => {
    console.log('Return Order');
  }

  const handleReorder = () => {
    console.log('Reorder');
  }

  const handleCancelReturn = () => {
    console.log('Cancel Return');
  }

  const handleClick = (returnDaysLeft: number = RETURNDAYSLEFT) => {
    switch (order_status) {
      case EOrderStatus.SHIPPED:
        handleCancelOrder();
        break;
      case EOrderStatus.DELIVERED:
        const currentDate = new Date();

        const createdAtDate = new Date(created_at);

        const returnDate = new Date(createdAtDate);
        returnDate.setDate(returnDate.getDate() + returnDaysLeft);

        if (returnDate < currentDate) {
          handleReorder();
        } else {
          handleReturnOrder();
        }
        break;
      case EOrderStatus.RETURNED:
        handleCancelReturn();
        break;
      default:
        break;
    }
  };

  return (
    <div className='flex flex-col gap-3 w-full sm:w-80'>
      <div className="order__view__id flex justify-between items-center">
        <p className="text-sm">Order ID #{id}</p>
        <MyOutlinedButton active={false} handleClick={handleViewProduct} className='w-max' type={ButtonType.BUTTON}>VIEW ORDER</MyOutlinedButton>
      </div>
      <div className="order__view__date flex justify-between items-center">
        <p className="text-sm">{order_status}</p>
        <MyOutlinedButton active={false} handleClick={handleClick} className='w-max' type={ButtonType.BUTTON}>
          {
            getStatusText(order_status)
          }
        </MyOutlinedButton>
      </div>
    </div>
  )
}

export default OrderCard
// <div className='flex items-center gap-3'>
//     <Image src={image} alt="product image" width={136} height={190} />
//     <div className="CartItem__text flex flex-col gap-5">
//         <p className="item__text text-sm max-w-[194px]">{title}</p>
//         <MyOutlinedButton active={false} handleClick={handleViewProduct} className='w-max' type={ButtonType.BUTTON}>VIEW PRODUCT</MyOutlinedButton>
//     </div>
// </div>