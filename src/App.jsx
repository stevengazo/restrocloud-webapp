import { useState } from 'react'
import { Home as HomeIcon, Settings as SettingsIcon } from '@mui/icons-material'
import DashboardLayout from './components/templates/DashboardLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Settings from './pages/Settings'
import * as authService from './services/authService'

const PAGES = {
  HOME: 'home',
  SETTINGS: 'settings',
}

const navItems = [
  { id: PAGES.HOME, label: 'Inicio', icon: <HomeIcon /> },
  { id: PAGES.SETTINGS, label: 'Ajustes', icon: <SettingsIcon /> },
]

const pageComponents = {
  [PAGES.HOME]: <Home />,
  [PAGES.SETTINGS]: <Settings />,
}

function App() {
  // Restaura la sesión existente desde el servicio (localStorage hoy, API mañana).
  const [user, setUser] = useState(() => authService.getCurrentUser())
  const [authView, setAuthView] = useState('login') // 'login' | 'register'
  const [page, setPage] = useState(PAGES.HOME)

  // El login redirige al home privado autenticando al usuario.
  const handleLogin = async (credentials) => {
    const loggedUser = await authService.login(credentials)
    setUser(loggedUser)
    setPage(PAGES.HOME)
  }

  // Tras registrar, inicia sesión automáticamente y entra al home privado.
  const handleRegister = async (data) => {
    await authService.register(data)
    await handleLogin({ username: data.username, password: data.password })
  }

  const handleLogout = async () => {
    await authService.logout()
    setUser(null)
    setAuthView('login')
  }

  if (!user) {
    return authView === 'register' ? (
      <Register onRegister={handleRegister} onSwitchToLogin={() => setAuthView('login')} />
    ) : (
      <Login onLogin={handleLogin} onSwitchToRegister={() => setAuthView('register')} />
    )
  }

  return (
    <DashboardLayout navItems={navItems} activeId={page} onSelect={setPage} onLogout={handleLogout}>
      {pageComponents[page]}
    </DashboardLayout>
  )
}

export default App
