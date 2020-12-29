// https://github.com/kentcdodds/bookshelf/blob/69bde2c117660bd988ffbc60f387165d2f852c62/src/context/auth-context.js

import React from 'react'
import { useAsync } from 'react-async'
import { bootstrapAppData } from '../utils/bootstrap'
import * as authClient from '../utils/auth-client'

import { FullPageSpinner } from '../components/lib'
import { Alert } from 'react-bootstrap'

const AuthContext = React.createContext()

function AuthProvider(props) {
  const [firstAttemptFinished, setFirstAttemptFinished] = React.useState(false)
  const {
    data = { user: null },
    error,
    isRejected,
    isPending,
    isSettled,
    reload,
  } = useAsync({ promiseFn: bootstrapAppData })

  React.useLayoutEffect(() => {
    if (isSettled) {
      setFirstAttemptFinished(true)
    }
  }, [isSettled])

  if (!firstAttemptFinished) {
    if (isPending) {
      return <FullPageSpinner />
    }
    if (isRejected) {
      return (
        <Alert variant="danger">
          <p>Uh oh... There's a problem. Try refreshing the app.</p>
          <pre>{error.message}</pre>
        </Alert>
      )
    }
  }

  const signin = form => authClient.signin(form).then(reload)
  const register = form => authClient.register(form).then(reload)
  const signout = () => authClient.signout().then(reload)

  return (
    <AuthContext.Provider
      value={{ data, signin, signout, register }}
      {...props}
    />
  )
}

function useAuth() {
  const context = React.useContext(AuthContext)

  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}

export { AuthProvider, useAuth }
