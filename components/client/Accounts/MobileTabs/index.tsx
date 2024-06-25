"use client"
import MyOutlinedButton from '@components/common/MyOutlinedButton'
import TabsBody from '@components/common/Tabs/TabsBody/TabsBody'
import React from 'react'
import AccountsDetails from '../AccountsDetails'
import AccountsOrders from '../AccountsOrders'
import { ButtonType } from '@modals/common/common.types'

interface IMobileTabs {
    activeTab: number,
    setActiveTab: (tab: number) => void
}

const MobileTabs = ({ activeTab, setActiveTab }: IMobileTabs) => {
    return (
        <div className='account__tabs m-3'>
            <div className="account__tabs__header flex items-center gap-4">
                <MyOutlinedButton active={activeTab === 1} handleClick={() => setActiveTab(1)} type={ButtonType.BUTTON}>ACCOUNT</MyOutlinedButton>
                <MyOutlinedButton active={activeTab === 2} handleClick={() => setActiveTab(2)} type={ButtonType.BUTTON}>ORDERS</MyOutlinedButton>
            </div>
            <div className="account__tabs__body mt-8">
                <TabsBody show={activeTab === 1}>
                    <AccountsDetails />
                </TabsBody>
                <TabsBody show={activeTab === 2}>
                    <AccountsOrders />
                </TabsBody>
            </div>
        </div>
    )
}

export default MobileTabs