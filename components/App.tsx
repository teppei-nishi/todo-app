'use client'
import { AppBar, Toolbar } from '@mui/material'
import { FC, ReactNode } from 'react'

export const App: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <AppBar>
        <Toolbar>Todo App</Toolbar>
      </AppBar>
      <main>
        <Toolbar />
        {children}
      </main>
    </div>
  )
}
