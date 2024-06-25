import React from 'react'
import BrunLogo from '@components/common/BrunLogo'
import AdminLogin from '@components/admin/AdminLogin'

const Login = () => {
  return (
    <section className="admin__auth flex min-h-screen">
      <div className="auth_sidebar_bg p-10 bg-black min-h-screen w-1/3">
        <BrunLogo isWhiteLogo />
      </div>
      <AdminLogin />
    </section>
  )
}

export default Login;