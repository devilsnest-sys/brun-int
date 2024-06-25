import React, { ReactNode } from 'react'

const TabsBody = ({ show, children} : {show:boolean, children: ReactNode}) => {
  return (
    <div className={show ? 'block' : 'hidden'}>{children}</div>
  )
}

export default TabsBody