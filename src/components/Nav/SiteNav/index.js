import React from 'react'
import { Anchor, Box, Button, Header, Menu, Nav } from 'grommet'
import { Task } from 'grommet-icons'

import { formatKeys } from '../../../shared/utils'

const navItems = [
  { label: 'How it works', href: '#' },
  { label: 'Tour features', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Sign In', href: '#' },
  { label: 'Sign Up', href: '#' },
]

const SiteNav = ({ size }) => (
  <Header background="light-2" pad="medium">
    <Box direction="row" align="center" gap="small">
      <Anchor icon={<Task color="brand" />} label="Task Manager App" href="/" />
    </Box>
    {size === 'small' ? (
      <Menu label="Click me" items={navItems} />
    ) : (
      <Box direction="row" align="center" gap="small">
        <Nav direction="row">
          {navItems.map(
            (item, index) =>
              index < navItems.length - 1 && (
                <Anchor
                  key={formatKeys(item.label)}
                  color="dark-2"
                  label={item.label}
                  href={item.href}
                />
              ),
          )}
        </Nav>
        <Button primary label="Sign Up" href="#" />
      </Box>
    )}
  </Header>
)

export default SiteNav
