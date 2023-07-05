'use client'
import { AppBar, Toolbar } from '@mui/material'
import { FC, ReactNode } from 'react'
import { GlobalHeader } from './GlobalHeader'

export const App: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <GlobalHeader />
      <main>
        <Toolbar />
        {children}
      </main>
    </div>
  )
}
