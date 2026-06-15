import { InputAdornment, TextField } from '@mui/material'

/**
 * Átomo: campo de texto Fluent (variante filled con línea de acento inferior).
 * Acepta un icono opcional renderizado como adorno inicial.
 */
export default function AppTextField({ icon, slotProps, ...props }) {
  const startAdornment = icon ? (
    <InputAdornment position="start">{icon}</InputAdornment>
  ) : undefined

  return (
    <TextField
      fullWidth
      slotProps={{
        ...slotProps,
        input: { startAdornment, ...slotProps?.input },
      }}
      {...props}
    />
  )
}
