import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Logout } from '@mui/icons-material'

/** Átomo: acción de cierre de sesión con estilo de item de navegación. */
export default function LogoutButton({ onClick }) {
  return (
    <ListItemButton
      onClick={onClick}
      sx={{
        color: 'error.main',
        '& .MuiListItemIcon-root': { color: 'error.main' },
      }}
    >
      <ListItemIcon sx={{ minWidth: 40 }}>
        <Logout />
      </ListItemIcon>
      <ListItemText primary="Cerrar sesión" primaryTypographyProps={{ fontWeight: 500 }} />
    </ListItemButton>
  )
}
