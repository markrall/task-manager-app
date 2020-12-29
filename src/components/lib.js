import React from 'react'
import { Container, Spinner } from 'react-bootstrap'

const FullPageSpinner = () => (
  <Container
    fluid
    style={{
      height: '100vh',
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Spinner animation="border" variant="primary" />
  </Container>
)

export { FullPageSpinner }
