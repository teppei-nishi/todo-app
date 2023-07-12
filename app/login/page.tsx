'use client'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import axios, { AxiosError } from 'axios'
import { useMutation } from '@tanstack/react-query'
import { AppBar, Card, FormControl, Toolbar, Typography } from '@mui/material'

type Credentials = {
  email: string
  password: string
}

const login = async (credentials: Credentials) => {
  const response = await axios.post('/api/login', credentials)
  return response.data
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const loginMutation = useMutation({
    mutationFn: login,
    onError: (error: AxiosError<{ message: string }>) => {
      if (error.response) {
        setError(error.response.data.message)
      }
    },
  })

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
          <Toolbar>ログイン</Toolbar>
        </AppBar>
        <FormControl sx={{ display: 'flex', flexDirection: 'column', p: 3 }}>
          <TextField
            label="メールアドレス"
            type="email"
            size={'small'}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{ mt: 2 }}
            label="パスワード"
            type="password"
            size={'small'}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            sx={{ mt: 2 }}
            variant="contained"
            onClick={() => {
              loginMutation.mutate({ email, password })
            }}
          >
            ログイン
          </Button>
        </FormControl>
      </Card>
      {error && (
        <Typography
          style={{ color: 'red' }}
          sx={{ mt: 3 }}
          dangerouslySetInnerHTML={{ __html: error }}
        />
      )}
    </Box>
  )
}
