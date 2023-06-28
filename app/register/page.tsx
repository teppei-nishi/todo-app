'use client'

import React from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'

type Credentials = {
  email: string
  password: string
}

export default function Register() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const registerMutation = useMutation({
    mutationFn: async (credentials: Credentials) => {
      const response = await axios.post('/api/register', credentials)
      return response.data
    },
  })

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ mt: 5 }}>
        <h1>ユーザー登録</h1>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
              registerMutation.mutate({ email, password })
            }}
          >
            登録
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
