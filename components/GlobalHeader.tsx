'use client'
import { StoreContext } from '@/app/context/store'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import { FC, useContext } from 'react'

type NavItem = {
  text: string
  href: string
}

export const GlobalHeader: FC = () => {
  const { isLoggedIn } = useContext(StoreContext)

  const navItems: NavItem[] = []

  if (!isLoggedIn) {
    navItems.push(
      { text: 'ログイン', href: '/login' },
      { text: 'ユーザー登録', href: '/register' }
    )
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Todo App</Typography>
          <Box>
            {navItems.map((item) => (
              <Button
                key={item.text}
                sx={{ color: 'inherit' }}
                component={Link}
                href={item.href}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
