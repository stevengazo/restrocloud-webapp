import { Typography } from '@mui/material'
import AcrylicSurface from '../atoms/AcrylicSurface'
import AppButton from '../atoms/AppButton'

/**
 * Organismo: panel de cabecera con título, descripción y acción opcional.
 */
export default function HeroPanel({ title, description, actionLabel, onAction }) {
  return (
    <AcrylicSurface elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography color="text.secondary" sx={{ mb: actionLabel ? 3 : 0 }}>
        {description}
      </Typography>
      {actionLabel && (
        <AppButton size="large" onClick={onAction}>
          {actionLabel}
        </AppButton>
      )}
    </AcrylicSurface>
  )
}
