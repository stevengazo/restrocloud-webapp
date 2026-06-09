import { useState } from 'react'
import {
  Box,
  Button,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { AccountCircle, Lock } from '@mui/icons-material'

export default function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' })

  const handleChange = (field) => (event) => {
    setCredentials((current) => ({ ...current, [field]: event.target.value }))
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '72vh' }}>
      <Paper elevation={4} sx={{ width: '100%', maxWidth: 420, p: 4, borderRadius: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Sign in
        </Typography>
        <Typography color="text.secondary" paragraph>
          Log in to access the dashboard and manage application settings in Material Design style.
        </Typography>
        <Stack spacing={3}>
          <TextField
            label="Username"
            value={credentials.username}
            onChange={handleChange('username')}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Password"
            type="password"
            value={credentials.password}
            onChange={handleChange('password')}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" size="large">
            Sign in
          </Button>
        </Stack>
      </Paper>
    </Box>
  )
}
