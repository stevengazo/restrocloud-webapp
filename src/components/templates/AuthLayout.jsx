import { Box, Stack, Typography } from '@mui/material'
import { fluentTokens } from '../../theme/fluentTheme'
import ThemeToggle from '../atoms/ThemeToggle'

/**
 * Template de autenticación: pantalla dividida (split-screen) estilo Fluent.
 * A la izquierda un panel de marca con degradado de acento; a la derecha,
 * el contenido del formulario centrado. En móvil se apila verticalmente.
 */
export default function AuthLayout({ children }) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: { xs: 'column', md: 'row' } }}>
      {/* Panel de marca */}
      <Box
        sx={{
          flex: { md: '1 1 45%' },
          minHeight: { xs: 200, md: 'auto' },
          p: { xs: 4, md: 8 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: '#fff',
          background: `linear-gradient(140deg, ${fluentTokens.accentPressed} 0%, ${fluentTokens.accent} 50%, ${fluentTokens.accentHover} 100%)`,
        }}
      >
        <Typography variant="overline" sx={{ opacity: 0.85 }}>
          RestroCloud
        </Typography>
        <Box>
          <Typography variant="h3" fontWeight={700} sx={{ mb: 2, letterSpacing: '-0.02em' }}>
            Gestiona tu restaurante en la nube
          </Typography>
          <Typography sx={{ opacity: 0.9, maxWidth: 420 }}>
            Panel unificado con Fluent Design. Inicia sesión para acceder a tus operaciones,
            ajustes y métricas en un solo lugar.
          </Typography>
        </Box>
        <Typography variant="caption" sx={{ opacity: 0.75 }}>
          © {new Date().getFullYear()} RestroCloud
        </Typography>
      </Box>

      {/* Panel del formulario */}
      <Box
        sx={{
          flex: { md: '1 1 55%' },
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 3, md: 6 },
          bgcolor: 'background.default',
        }}
      >
        <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
          <ThemeToggle />
        </Box>
        <Stack sx={{ width: '100%', maxWidth: 420 }}>{children}</Stack>
      </Box>
    </Box>
  )
}
