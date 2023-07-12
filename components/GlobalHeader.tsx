'use client'
import { StoreContext } from '@/app/context/store'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC, useContext } from 'react'

type NavItem = {
  text: string
  href?: string
  onClick?: () => void
}

export const GlobalHeader: FC = () => {
  const { store } = useContext(StoreContext)
  const router = useRouter()

  const navItems: NavItem[] = []

  if (!store.isLoggedIn) {
    navItems.push(
      { text: 'ログイン', href: '/login' },
      { text: 'ユーザー登録', href: '/register' }
    )
  }

  if (store.isLoggedIn) {
    navItems.push({
      text: 'ログアウト',
      onClick: () => {
        store.setToken(null)
        store.setUser(null)
        router.push('/')
      },
    })
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
                component={item.href ? Link : 'button'}
                href={item.href ?? undefined}
                onClick={item.onClick ?? undefined}
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
