import React from 'react'
import { Box, ResponsiveContext } from 'grommet'

import SiteNav from '../../Nav/SiteNav'

const SiteLayout = () => {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box fill>
          <SiteNav size={size} />
          <Box>
            <p>main</p>
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default SiteLayout
