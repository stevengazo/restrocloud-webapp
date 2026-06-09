import { useMemo, useState } from 'react'
import { Brightness4, Brightness7, Home as HomeIcon, LockOpen, Settings as SettingsIcon } from '@mui/icons-material'
import {
  Box,
  CssBaseline,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
  Divider,
} from '@mui/material'
import Home from './pages/Home'
import Login from './pages/Login'
import Settings from './pages/Settings'

const pages = {
  HOME: 'home',
  SETTINGS: 'settings',
  LOGIN: 'login',
}

const menuItems = [
  { id: pages.HOME, label: 'Home', icon: <HomeIcon /> },
  { id: pages.SETTINGS, label: 'Settings', icon: <SettingsIcon /> },
  { id: pages.LOGIN, label: 'Login', icon: <LockOpen /> },
]

function App() {
  const [page, setPage] = useState(pages.HOME)
  const [mode, setMode] = useState('dark')

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#5b7dd7',
          },
          background: {
            default: mode === 'light' ? '#f7f8fc' : '#090b15',
            paper: mode === 'light' ? '#ffffff' : '#111827',
          },
        },
        typography: {
          fontFamily: 'Inter, system-ui, sans-serif',
        },
      }),
    [mode],
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
        <Box
          component="aside"
          sx={{
            width: { xs: '100%', sm: 280 },
            borderRight: 1,
            borderColor: 'divider',
            bgcolor: 'background.paper',
            px: 3,
            py: 4,
            position: 'sticky',
            top: 0,
            alignSelf: 'flex-start',
            height: { xs: 'auto', sm: '100vh' },
          }}
        >
          <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
            <Box>
              <Typography variant="overline" color="text.secondary" display="block" letterSpacing={2}>
                RestroCloud
              </Typography>
              <Typography variant="h5" fontWeight={700}>
                Material Dashboard
              </Typography>
            </Box>
            <IconButton onClick={() => setMode((current) => (current === 'light' ? 'dark' : 'light'))} color="inherit">
              {mode === 'light' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
          <Divider sx={{ mb: 3 }} />
          <List disablePadding>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.id}
                selected={page === item.id}
                onClick={() => setPage(item.id)}
                sx={{ borderRadius: 2, mb: 1 }}
              >
                <ListItemIcon sx={{ color: 'primary.main' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
          <Paper elevation={0} variant="outlined" sx={{ mt: 4, p: 3, borderRadius: 3, bgcolor: 'background.default' }}>
            <Typography variant="subtitle2" gutterBottom>
              Quick tip
            </Typography>
            <Typography color="text.secondary" variant="body2">
              Use the sidebar navigation to switch pages and toggle theme mode for the layout.
            </Typography>
          </Paper>
        </Box>

        <Box component="main" sx={{ flex: 1, p: { xs: 3, sm: 4 } }}>
          {page === pages.HOME && <Home />}
          {page === pages.SETTINGS && <Settings />}
          {page === pages.LOGIN && <Login />}
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
