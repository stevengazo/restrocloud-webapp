import { Box } from '@mui/material'
import Sidebar from '../organisms/Sidebar'

/**
 * Template: estructura del dashboard (barra lateral + área de contenido).
 * No conoce el contenido concreto; recibe la navegación y los hijos.
 */
export default function DashboardLayout({ navItems, activeId, onSelect, onLogout, children }) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: { xs: 'column', sm: 'row' } }}>
      <Sidebar items={navItems} activeId={activeId} onSelect={onSelect} onLogout={onLogout} />
      <Box component="main" sx={{ flex: 1, p: { xs: 3, sm: 4 } }}>
        {children}
      </Box>
    </Box>
  )
}
