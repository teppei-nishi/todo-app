import { AppBar, Box, Card, SxProps, Theme, Toolbar } from '@mui/material'
import { FC, ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
  sx?: SxProps<Theme>
}

export const Panel: FC<Props> = ({ title, children, sx }) => {
  return (
    <Card sx={sx}>
      <AppBar position="static" elevation={0}>
        <Toolbar variant="dense">{title}</Toolbar>
      </AppBar>
      <Box>{children}</Box>
    </Card>
  )
}
