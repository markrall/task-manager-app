import React from 'react'
import { useUser } from './context/user-context'

import { FullPageSpinner } from './components/lib'

const loadAuthenticatedApp = () => import('./authenticated-app')
const AuthenticatedApp = React.lazy(loadAuthenticatedApp)
const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))

function App() {
  const user = useUser()

  React.useEffect(() => {
    loadAuthenticatedApp()
  }, [])

  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  )
}

export default App
