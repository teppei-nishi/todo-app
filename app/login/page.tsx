'use client'
import { useContext, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios, { AxiosError } from 'axios'
import { useMutation } from '@tanstack/react-query'
import { FormControl, Typography } from '@mui/material'
import { StoreContext } from '../context/store'
import { Panel } from '@/components/Panel'

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
  const { store } = useContext(StoreContext)

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      store.setToken(data.token)
      store.setUser(data.user)
    },
    onError: (error: AxiosError<{ message: string }>) => {
      if (error.response) {
        setError(error.response.data.message)
      }
    },
  })

  return (
    <>
      <Panel title="ログイン" sx={{ mt: 5 }}>
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
      </Panel>
      {error && (
        <Typography
          style={{ color: 'red' }}
          sx={{ mt: 3 }}
          dangerouslySetInnerHTML={{ __html: error }}
        />
      )}
    </>
  )
}
