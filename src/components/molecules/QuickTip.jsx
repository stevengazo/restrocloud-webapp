import { Typography } from '@mui/material'
import AcrylicSurface from '../atoms/AcrylicSurface'

/**
 * Molécula: tarjeta de consejo rápido para la barra lateral.
 */
export default function QuickTip({ title, children }) {
  return (
    <AcrylicSurface sx={{ p: 2.5 }}>
      <Typography variant="subtitle2" gutterBottom>
        {title}
      </Typography>
      <Typography color="text.secondary" variant="body2">
        {children}
      </Typography>
    </AcrylicSurface>
  )
}
