import React, { useState } from 'react'
import { Box, Button, Collapsible, Layer, ResponsiveContext } from 'grommet'
import { FormClose } from 'grommet-icons'

import AppNav from '../../Nav/AppNav'
import SideBar from '../../Nav/SideBar'

const AppLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const displaySidebar = size => {
    const partialSidebar = (
      <Layer>
        <Box
          background="light-2"
          tag="header"
          justify="end"
          align="center"
          direction="row"
        >
          <Button icon={<FormClose />} onClick={() => setShowSidebar(false)} />
        </Box>
        <SideBar fill>SideBar</SideBar>
      </Layer>
    )
    const fullSidebar = (
      <Collapsible direction="horizontal" open={showSidebar}>
        <SideBar width="medium" elevation="small" flex>
          SideBar
        </SideBar>
      </Collapsible>
    )

    return !showSidebar || size !== 'small' ? fullSidebar : partialSidebar
  }

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box fill>
          <AppNav
            onClick={() => setShowSidebar(!showSidebar)}
            openState={showSidebar}
          />

          <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
            <Box flex align="center" justify="center">
              <p>main</p>
            </Box>
            {displaySidebar(size)}
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default AppLayout
