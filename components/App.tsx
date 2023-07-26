'use client'
import { Box, Toolbar } from '@mui/material'
import { FC, ReactNode } from 'react'
import { GlobalHeader } from './GlobalHeader'

export const App: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <GlobalHeader />
      <main>
        <Toolbar />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {children}
        </Box>
      </main>
    </div>
  )
}
