import { Box, Divider, List } from '@mui/material'
import BrandMark from '../atoms/BrandMark'
import ThemeToggle from '../atoms/ThemeToggle'
import LogoutButton from '../atoms/LogoutButton'
import NavItem from '../molecules/NavItem'
import QuickTip from '../molecules/QuickTip'

/**
 * Organismo: barra lateral de navegación con marca, conmutador de tema,
 * lista de páginas, consejo rápido y cierre de sesión. Superficie "mica" Fluent.
 */
export default function Sidebar({ items, activeId, onSelect, onLogout }) {
  return (
    <Box
      component="aside"
      sx={{
        width: { xs: '100%', sm: 280 },
        flexShrink: 0,
        borderRight: 1,
        borderColor: 'divider',
        bgcolor: (theme) =>
          theme.palette.mode === 'light' ? 'rgba(243, 243, 243, 0.7)' : 'rgba(32, 32, 32, 0.7)',
        backdropFilter: 'blur(30px) saturate(125%)',
        WebkitBackdropFilter: 'blur(30px) saturate(125%)',
        px: 2.5,
        py: 3,
        position: { sm: 'sticky' },
        top: 0,
        alignSelf: 'flex-start',
        height: { xs: 'auto', sm: '100vh' },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
        <BrandMark />
        <ThemeToggle />
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List disablePadding sx={{ flexGrow: 1 }}>
        {items.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            selected={activeId === item.id}
            onClick={() => onSelect(item.id)}
          />
        ))}
      </List>
      <QuickTip title="Consejo rápido">
        Usa la barra lateral para cambiar de página y alterna el tema con el botón superior.
      </QuickTip>
      {onLogout && (
        <>
          <Divider sx={{ my: 1.5 }} />
          <List disablePadding>
            <LogoutButton onClick={onLogout} />
          </List>
        </>
      )}
    </Box>
  )
}
