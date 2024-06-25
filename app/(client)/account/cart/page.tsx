'use client'
import React from 'react'
import { RootState } from '@libs/store'
import WishList from '@components/client/Cart/WishList'
import CartBody from '@components/client/Cart/CartBody'
import CartNavbar from '@components/client/Cart/CartNavbar'
import { useDispatch, useSelector } from 'react-redux'
import TabsBody from '@components/common/Tabs/TabsBody/TabsBody'
import { setCartPageActiveTab } from '@libs/features/cart/cartSlice'

const Cart = () => {

    const activeTab = useSelector((state: RootState) => state.cart.cartPageActiveTab)
    const dispatch = useDispatch();

    const setActiveTab = (tab: 1 | 2) => {
        dispatch(setCartPageActiveTab(tab))
    }

    return (
        <main className='cart__route flex flex-col gap-4 max-w-5xl my-3 px-4 mx-auto min-h-screen mt-28'>
            <CartNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="account__tabs__body mt-4 md:mt-8">
                <TabsBody show={activeTab === 1}>
                    <CartBody />
                </TabsBody>
                <TabsBody show={activeTab === 2}>
                    <WishList />
                </TabsBody>
            </div>
        </main>
    )
}

export default Cart