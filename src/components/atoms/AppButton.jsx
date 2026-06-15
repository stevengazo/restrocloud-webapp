import { Button } from '@mui/material'

/**
 * Átomo: botón Fluent. Envuelve MUI Button con los valores por defecto
 * del proyecto (contained/primary) para mantener consistencia.
 */
export default function AppButton({ variant = 'contained', children, ...props }) {
  return (
    <Button variant={variant} {...props}>
      {children}
    </Button>
  )
}
