'use client'
import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'

const navItems = ['ユーザー登録']

export const GlobalHeader: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Todo App</Typography>
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  sx={{ textAlign: 'center' }}
                  component={Link}
                  href="/register"
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
