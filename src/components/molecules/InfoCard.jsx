import { Typography } from '@mui/material'
import AcrylicSurface from '../atoms/AcrylicSurface'
import IconBadge from '../atoms/IconBadge'

/**
 * Molécula: tarjeta informativa (icono opcional + título + descripción)
 * sobre superficie acrílica Fluent con realce reveal en hover.
 */
export default function InfoCard({ icon, title, description }) {
  return (
    <AcrylicSurface
      sx={{
        p: 3,
        height: '100%',
        transition: 'box-shadow 150ms ease, border-color 150ms ease, transform 150ms ease',
        '&:hover': {
          boxShadow: 4,
          borderColor: 'primary.main',
          transform: 'translateY(-2px)',
        },
      }}
    >
      {icon && <IconBadge sx={{ mb: 2 }}>{icon}</IconBadge>}
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography color="text.secondary" variant="body2">
        {description}
      </Typography>
    </AcrylicSurface>
  )
}
