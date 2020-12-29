// https://github.com/kentcdodds/bookshelf/blob/69bde2c117660bd988ffbc60f387165d2f852c62/src/unauthenticated-app.js

import React from 'react'
import { useAuth } from './context/auth-context'
import useCallbackStatus from './utils/use-callback-status'

import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap'

const SignInForm = ({ onSubmit, buttonText }) => {
  const { isPending, isRejected, error, run } = useCallbackStatus()
  function handleSubmit(event) {
    event.preventDefault()
    const { username, password } = event.target.elements

    run(
      onSubmit({
        username: username.value,
        password: password.value,
      }),
    )
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          autoComplete="email"
          type="email"
          placeholder="Enter email"
          defaultValue="kasia@example.com"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          autoComplete="current-password"
          type="password"
          placeholder="Password"
          defaultValue="r5_9)Gq2!@135"
        />
      </Form.Group>
      <Form.Group>
        <Button variant="primary" type="submit">
          {isPending ? (
            <Spinner
              as="span"
              animation="border"
              role="status"
              variant="light"
              size="sm"
            />
          ) : null}
          {buttonText}
        </Button>
      </Form.Group>
      {isRejected ? (
        <Alert variant="danger">{error ? error.message : null}</Alert>
      ) : null}
    </Form>
  )
}

function UnAuthenticatedApp() {
  const { signin, register } = useAuth()
  return (
    <Container>
      <h1>Sign In</h1>
      <SignInForm onSubmit={signin} buttonText="Sign In" />
    </Container>
  )
}

export default UnAuthenticatedApp
