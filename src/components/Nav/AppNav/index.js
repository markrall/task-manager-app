import React from 'react'
import { Anchor, Box, Button, Header } from 'grommet'

import { Close, Menu, Task } from 'grommet-icons'

const AppNav = props => (
  <Header
    tag="header"
    direction="row"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
  >
    <Box direction="row" align="center" gap="small">
      <Anchor
        icon={<Task color="white" />}
        color="white"
        label="Task Manager App"
        href="/"
      />
    </Box>
    <Button
      icon={props.openState ? <Close /> : <Menu />}
      onClick={props.onClick}
    />
  </Header>
)

export default AppNav
