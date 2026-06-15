import { Paper } from '@mui/material'
import { fluentTokens } from '../../theme/fluentTheme'

/**
 * Átomo: superficie con material acrílico Fluent (translúcida + desenfoque).
 * Es la base visual de tarjetas y paneles del dashboard.
 */
export default function AcrylicSurface({ children, sx, elevation = 0, ...props }) {
  return (
    <Paper
      elevation={elevation}
      sx={{
        position: 'relative',
        borderRadius: `${fluentTokens.radius.card}px`,
        border: 1,
        borderColor: 'divider',
        backdropFilter: 'blur(20px) saturate(125%)',
        WebkitBackdropFilter: 'blur(20px) saturate(125%)',
        bgcolor: (theme) =>
          theme.palette.mode === 'light' ? fluentTokens.acrylic.light : fluentTokens.acrylic.dark,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Paper>
  )
}
