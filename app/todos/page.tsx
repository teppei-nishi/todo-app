'use client'
import Box from '@mui/material/Box'
import { AppBar, Card, Toolbar } from '@mui/material'

export default function Todos() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Card sx={{ mt: 5 }}>
        <AppBar position="static" elevation={0}>
          <Toolbar variant="dense">ToDos</Toolbar>
        </AppBar>
      </Card>
    </Box>
  )
}
