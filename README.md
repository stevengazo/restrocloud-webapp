# RestroCloud Webapp

Panel de gestión para restaurantes construido con **React 19 + Vite**, **MUI** tematizado con
**Fluent Design** y **Tailwind CSS 4**. La interfaz está organizada siguiendo **Atomic Design** y el
acceso a datos se aísla en una **capa de servicios** preparada para conectarse a una API en el futuro
(hoy funciona con `localStorage`).

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (Vite)
npm run build    # build de producción
npm run preview  # previsualizar el build
npm run lint     # ESLint
```

## Arquitectura — Atomic Design

El código de `src/` se organiza de lo más pequeño y reutilizable a lo más específico:

```
src/
├── components/
│   ├── atoms/        # piezas mínimas: AppButton, AppTextField, AppSwitch,
│   │                 #   ThemeToggle, LogoutButton, BrandMark, IconBadge, AcrylicSurface
│   ├── molecules/    # combinaciones de átomos: NavItem, InfoCard, FormField,
│   │                 #   SettingToggle, QuickTip
│   ├── organisms/    # secciones completas: Sidebar, LoginForm, RegisterForm,
│   │                 #   FeatureGrid, HeroPanel, SettingsPanel
│   └── templates/    # estructuras de página: DashboardLayout, AuthLayout
├── pages/            # vistas: Home, Settings, Login, Register
├── services/         # capa de acceso a datos (ver abajo)
├── theme/            # tema Fluent y contexto de modo claro/oscuro
├── App.jsx           # orquesta autenticación y navegación
└── main.jsx          # punto de entrada + ThemeModeProvider
```

**Regla general:** un componente solo importa componentes de un nivel inferior
(las páginas usan organismos/plantillas, los organismos usan moléculas, etc.).

## Fluent Design

El lenguaje visual de Microsoft Fluent se aplica tematizando MUI en
[`src/theme/fluentTheme.js`](src/theme/fluentTheme.js):

- **Color de acento** de Windows (`#0067c0`) con estados hover/pressed.
- **Materiales acrílico/mica**: superficies translúcidas con desenfoque
  ([`AcrylicSurface`](src/components/atoms/AcrylicSurface.jsx)).
- **Profundidad** mediante sombras suaves en capas.
- **Esquinas redondeadas** (4px controles, 8px tarjetas) e **indicador de selección**
  de acento en la navegación.
- **Efecto reveal** (realce de borde) en hover de tarjetas.
- Tipografía **Segoe UI Variable**.

El modo claro/oscuro se gestiona con [`ThemeModeProvider`](src/theme/ThemeModeProvider.jsx)
y el hook `useThemeMode`.

## Capa de servicios

Toda la persistencia pasa por `src/services/`, de modo que los componentes nunca
acceden directamente a `localStorage`:

| Archivo | Responsabilidad |
| --- | --- |
| [`storage.js`](src/services/storage.js) | Envoltura segura sobre `localStorage` (serialización JSON, manejo de errores, prefijo de claves). |
| [`authService.js`](src/services/authService.js) | Registro, login, logout y sesión actual. **Funciones asíncronas** para facilitar la migración a API. |
| [`apiClient.js`](src/services/apiClient.js) | Cliente HTTP *placeholder* para la futura API (`fetch` con base `VITE_API_URL`). |

### Migrar a tu API

La capa de servicios está pensada para que conectar el backend sea un cambio
localizado:

1. Crea un `.env` con `VITE_API_URL=https://tu-api.com`.
2. Reescribe las funciones de `authService.js` para usar `request()` de
   `apiClient.js` en lugar de `storage`, **manteniendo las mismas firmas**.
   Como ya son `async`, los componentes no necesitan cambios.

```js
// authService.js (versión API, ejemplo)
import { request } from './apiClient'

export async function login(credentials) {
  const { user, token } = await request('/auth/login', { method: 'POST', body: credentials })
  setItem('session', { user, token })
  return user
}
```

> ⚠️ **Seguridad:** la implementación actual guarda contraseñas en texto plano en
> `localStorage` únicamente como placeholder de desarrollo. La validación real de
> credenciales debe ocurrir en el servidor. No usar tal cual en producción.

## Autenticación (estado actual)

- **Registro** → crea el usuario, inicia sesión automáticamente y entra al home privado.
- **Login** → valida credenciales y redirige al home privado (dashboard).
- **Logout** → botón en la barra lateral que cierra la sesión y vuelve al login.

La navegación es por estado en `App.jsx` (sin router todavía). El dashboard solo es
accesible con sesión iniciada.
