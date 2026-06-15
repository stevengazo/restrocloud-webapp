import { useState } from 'react'
import { Alert, Box, Link, Stack, Typography } from '@mui/material'
import { AccountCircle, Badge, Email, Lock } from '@mui/icons-material'
import AppButton from '../atoms/AppButton'
import FormField from '../molecules/FormField'

const EMPTY = { name: '', email: '', username: '', password: '', confirm: '' }

/**
 * Organismo: formulario de registro de cuenta. Diseñado para vivir dentro de
 * AuthLayout (sin tarjeta propia). Valida en cliente antes de invocar onRegister.
 *
 * @param {object} props
 * @param {(data: { name: string, email: string, username: string, password: string }) => Promise<void>} props.onRegister
 *        Callback de registro. Puede lanzar para mostrar un error.
 * @param {() => void} [props.onSwitchToLogin] Cambia a la vista de inicio de sesión.
 */
export default function RegisterForm({ onRegister, onSwitchToLogin }) {
  const [form, setForm] = useState(EMPTY)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  const validate = () => {
    if (!form.name || !form.email || !form.username || !form.password) {
      return 'Completa todos los campos.'
    }
    if (form.password.length < 6) {
      return 'La contraseña debe tener al menos 6 caracteres.'
    }
    if (form.password !== form.confirm) {
      return 'Las contraseñas no coinciden.'
    }
    return ''
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setError('')
    setLoading(true)
    try {
      const { confirm, ...data } = form
      await onRegister?.(data)
    } catch (err) {
      setError(err.message ?? 'No se pudo crear la cuenta.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
      <Typography variant="h4" gutterBottom>
        Crear cuenta
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Regístrate para empezar a gestionar tu restaurante con RestroCloud.
      </Typography>
      <Stack spacing={2.5}>
        {error && <Alert severity="error">{error}</Alert>}
        <FormField label="Nombre" icon={<Badge />} value={form.name} onChange={handleChange('name')} required />
        <FormField
          label="Correo"
          type="email"
          icon={<Email />}
          value={form.email}
          onChange={handleChange('email')}
          required
        />
        <FormField
          label="Usuario"
          icon={<AccountCircle />}
          value={form.username}
          onChange={handleChange('username')}
          required
        />
        <FormField
          label="Contraseña"
          type="password"
          icon={<Lock />}
          value={form.password}
          onChange={handleChange('password')}
          required
        />
        <FormField
          label="Confirmar contraseña"
          type="password"
          icon={<Lock />}
          value={form.confirm}
          onChange={handleChange('confirm')}
          required
        />
        <AppButton type="submit" size="large" disabled={loading}>
          {loading ? 'Creando cuenta…' : 'Registrarme'}
        </AppButton>
        {onSwitchToLogin && (
          <Typography variant="body2" color="text.secondary" textAlign="center">
            ¿Ya tienes cuenta?{' '}
            <Link component="button" type="button" onClick={onSwitchToLogin} underline="hover">
              Inicia sesión
            </Link>
          </Typography>
        )}
      </Stack>
    </Box>
  )
}
