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

  const leftNavItems: NavItem[] = []
  const rightNavItems: NavItem[] = []

  if (store.isLoggedIn) {
    leftNavItems.push({ text: '閲覧', href: '/todos' })
  }

  if (!store.isLoggedIn) {
    rightNavItems.push(
      { text: 'ログイン', href: '/login' },
      { text: 'ユーザー登録', href: '/register' }
    )
  }

  if (store.isLoggedIn) {
    rightNavItems.push({
      text: 'ログアウト',
      onClick: () => {
        store.setToken(null)
        store.setUser(null)
        router.push('/')
      },
    })
  }

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>Todo App</Typography>
          <Box sx={{ flexGrow: 1, ml: 2 }}>
            {leftNavItems.map((item) => (
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
          <Box>
            {rightNavItems.map((item) => (
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
    </>
  )
}
