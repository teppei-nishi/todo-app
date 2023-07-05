'use client'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'

const navItems = [
  { text: 'ログイン', href: '/' },
  { text: 'ユーザー登録', href: '/register' },
]

export const GlobalHeader: FC = () => {
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
