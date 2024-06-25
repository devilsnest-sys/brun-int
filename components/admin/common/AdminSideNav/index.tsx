import SideNavList from '@components/admin/SideNavList'
import BrunLogo from '@components/common/BrunLogo'
import React from 'react'

const AdminSideNav = () => {

  return (
    <div className='w-64 max-h-screen bg-black sticky top-0 left-0 z-10 flex flex-col items-center justify-between text-white'>
      <BrunLogo isWhiteLogo />
      <SideNavList />
      <span className='invisible'>.</span>
    </div>
  )
}

export default AdminSideNav