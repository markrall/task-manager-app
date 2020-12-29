import React from 'react'
import { Button, Card } from 'react-bootstrap'

function UserProfile(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.user.name}</Card.Title>
        <Card.Text>{props.user.email}</Card.Text>
        <Button siz="sm" variant="secondary" onClick={props.onSignOut}>
          Signout
        </Button>
      </Card.Body>
    </Card>
  )
}

export default UserProfile
