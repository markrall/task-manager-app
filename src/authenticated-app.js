import * as React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { useAuth } from './context/auth-context'
import { useUser } from './context/user-context'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { ErrorBoundary } from 'react-error-boundary'
import Home from './components/authenticated/Home'
import UserProfile from './components/authenticated/UserProfile'

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

const AuthenticatedApp = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Navigation />

        <main>
          <Container>
            <Routes />
          </Container>
        </main>
      </ErrorBoundary>
    </>
  )
}

function Navigation() {
  const { user } = useUser()
  const { signout } = useAuth()

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/">TICKIT!</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/users/me">{user.name}</Nav.Link>
          <Button size="sm" variant="secondary" onClick={signout}>
            Sign Out
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

function Routes() {
  const { user } = useUser()
  const { signout } = useAuth()

  return (
    <Router>
      <Switch>
        <Route path="/users/me">
          <UserProfile user={user} onSignOut={signout} />
        </Route>
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default AuthenticatedApp
