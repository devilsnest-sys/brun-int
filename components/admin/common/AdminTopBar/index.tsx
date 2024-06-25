import Link from 'next/link'
import React, { ReactNode } from 'react'

const AdminTopBar = () => {
  return (
    <div className='topbar w-full flex justify-end items-center h-14'>
      <div className="topbar__container flex items-center gap-4">
        <Link href='/notifications' className='h-6'>
          <span className="material-symbols-rounded">
            notifications
          </span>
        </Link>
        <div className="topbar__account flex items-center gap-2">
          <span className="material-symbols-rounded">
            account_circle
          </span>
          <span className="topbar__account__name">John Doe</span>
          <AccountDropDown />
        </div>
      </div>
    </div>
  )
}

const accountData = [
  {
    Icon: <span className="material-symbols-rounded">account_circle</span>,
    title: 'Mike Doe'
  },
  {
    Icon: <span className="material-symbols-rounded">account_circle</span>,
    title: 'John Doe'
  },
  {
    Icon: <span className="material-symbols-rounded">person_add</span>,
    title: 'Add New'
  },
  {
    Icon: <span className="material-symbols-rounded">logout</span>,
    title: 'Logout'
  }
]

const AccountDropDown = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }


  return (
    <div className="account__dropdown relative h-6">
      <span className={`material-symbols-rounded transition-all duration-200 cursor-pointer ${isOpen && 'rotate-180'}`} onClick={handleToggle}>
        expand_more
      </span>
      {
        isOpen && (
          <div className="account__container border border-black absolute z-10 top-12 right-1 w-max bg-white">
            <IconText icon={accountData[0].Icon} title={accountData[0].title} />
            <IconText icon={accountData[1].Icon} title={accountData[1].title} />
            <IconText icon={accountData[2].Icon} title={accountData[2].title} />
            <div className="border-t border-black" />
            <IconText icon={accountData[3].Icon} title={accountData[3].title} />
          </div>
        )
      }
    </div>
  )
}

interface IIconText {
  icon: ReactNode,
  title: string,
  className?: string
  onClick?: () => void
}

const IconText = ({ icon, title, className, onClick }: IIconText) => {
  return (
    <div className={`icon__text flex items-center gap-2 py-2 px-4 cursor-pointer ${className}`} onClick={onClick}>
      {icon}
      <span>{title}</span>
    </div>
  )
}

export default AdminTopBar