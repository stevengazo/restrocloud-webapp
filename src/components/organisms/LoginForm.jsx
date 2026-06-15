import { useState } from 'react'
import { Alert, Box, Link, Stack, Typography } from '@mui/material'
import { AccountCircle, Lock } from '@mui/icons-material'
import AppButton from '../atoms/AppButton'
import FormField from '../molecules/FormField'

/**
 * Organismo: formulario de inicio de sesión. Diseñado para vivir dentro de
 * AuthLayout (sin tarjeta propia).
 *
 * @param {object} props
 * @param {(credentials: { username: string, password: string }) => Promise<void>} props.onLogin
 *        Callback de autenticación. Puede lanzar para mostrar un error.
 * @param {() => void} [props.onSwitchToRegister] Cambia a la vista de registro.
 */
export default function LoginForm({ onLogin, onSwitchToRegister }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (field) => (event) => {
    setCredentials((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setLoading(true)
    try {
      await onLogin?.(credentials)
    } catch (err) {
      setError(err.message ?? 'No se pudo iniciar sesión.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
      <Typography variant="h4" gutterBottom>
        Iniciar sesión
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Accede al panel y gestiona la configuración con estilo Fluent Design.
      </Typography>
      <Stack spacing={2.5}>
        {error && <Alert severity="error">{error}</Alert>}
        <FormField
          label="Usuario o correo"
          icon={<AccountCircle />}
          value={credentials.username}
          onChange={handleChange('username')}
          required
        />
        <FormField
          label="Contraseña"
          type="password"
          icon={<Lock />}
          value={credentials.password}
          onChange={handleChange('password')}
          required
        />
        <AppButton type="submit" size="large" disabled={loading}>
          {loading ? 'Entrando…' : 'Entrar'}
        </AppButton>
        {onSwitchToRegister && (
          <Typography variant="body2" color="text.secondary" textAlign="center">
            ¿No tienes cuenta?{' '}
            <Link component="button" type="button" onClick={onSwitchToRegister} underline="hover">
              Regístrate
            </Link>
          </Typography>
        )}
      </Stack>
    </Box>
  )
}
