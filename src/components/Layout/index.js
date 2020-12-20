import React, { useContext } from 'react'

import { AuthContext } from '../../shared/context/auth-context'
import SiteLayout from './SiteLayout'
import AppLayout from './AppLayout'

const Layout = () => {
  const authContext = useContext(AuthContext)

  const content = authContext.isAuth ? <AppLayout /> : <SiteLayout />

  return content
}

export default Layout
