import React from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import axios from 'axios'

export default function Register() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  async function register() {
    const { data } = await axios.post('/api/register', { email, password })
    console.log('register', data)
  }

  return (
    <div>
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
        <Button sx={{ mt: 2 }} variant="contained" onClick={register}>
          登録
        </Button>
      </Box>
    </div>
  )
}
