import { Box } from '@mui/material'

/**
 * Átomo: contenedor con material acrílico para un icono.
 * Da el aspecto de "tile" Fluent con acento sutil.
 */
export default function IconBadge({ children, size = 44, sx }) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        color: 'primary.main',
        bgcolor: (theme) =>
          theme.palette.mode === 'light' ? 'rgba(0, 103, 192, 0.1)' : 'rgba(0, 120, 212, 0.16)',
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}
