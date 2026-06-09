import { Box, Button, Paper, Stack, Typography } from '@mui/material'

export default function Home() {
  return (
    <Stack spacing={4}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4, bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Welcome to RestroCloud
        </Typography>
        <Typography color="text.secondary" paragraph>
          Your Material Design dashboard is now ready. Use the sidebar to navigate between Home, Settings, and Login pages with smooth theme switching.
        </Typography>
        <Button variant="contained" size="large">
          Explore dashboard
        </Button>
      </Paper>

      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        <Paper elevation={1} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Fast setup
          </Typography>
          <Typography color="text.secondary">
            Tailwind and Material UI work together for a clean, responsive layout with modern motion utilities.
          </Typography>
        </Paper>

        <Paper elevation={1} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Modern pages
          </Typography>
          <Typography color="text.secondary">
            Built-in pages help you quickly customize your app flow and keep the experience consistent across screens.
          </Typography>
        </Paper>
      </Box>
    </Stack>
  )
}
