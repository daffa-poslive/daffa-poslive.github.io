import { Box } from '@mui/material'
import React from 'react'

export default function SectionMain(props: React.PropsWithChildren) {
  const { children } = props
  return (
    <Box
      component="main"
      display="flex"
      width="100%"
      flexDirection="column"
      gap={2}
      paddingLeft={2}
      paddingRight={2}
    >
      {children}
    </Box>
  )
}
