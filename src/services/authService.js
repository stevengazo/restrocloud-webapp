import { getItem, setItem, removeItem } from './storage'

/**
 * Servicio de autenticación.
 *
 * IMPLEMENTACIÓN ACTUAL: localStorage (solo para desarrollo local).
 *
 * MIGRACIÓN A API: todas las funciones son asíncronas (devuelven Promesas) para
 * que el cambio a tu API REST sea transparente para los componentes. Cuando
 * conectes el backend, sustituye el cuerpo de cada función por una llamada
 * `fetch`/`axios` manteniendo la misma firma. Ejemplo:
 *
 *   export async function login(credentials) {
 *     const res = await apiClient.post('/auth/login', credentials)
 *     setSession(res.data.token)
 *     return res.data.user
 *   }
 *
 * ⚠️ SEGURIDAD: aquí las contraseñas se guardan en texto plano en localStorage,
 * algo aceptable SOLO como placeholder de desarrollo. Nunca hagas esto en
 * producción: la validación de credenciales debe ocurrir en el servidor.
 */

const USERS_KEY = 'users'
const SESSION_KEY = 'session'

/** @typedef {{ name: string, email: string, username: string, password: string }} StoredUser */
/** @typedef {{ name: string, email: string, username: string }} PublicUser */

/** Quita la contraseña antes de exponer un usuario a la UI. */
const toPublic = ({ password, ...user }) => user

const readUsers = () => getItem(USERS_KEY, [])

/**
 * Registra un nuevo usuario.
 * @param {{ name: string, email: string, username: string, password: string }} data
 * @returns {Promise<PublicUser>}
 * @throws {Error} Si el usuario o el email ya existen.
 */
export async function register(data) {
  const users = readUsers()
  const exists = users.some(
    (u) => u.username === data.username || u.email === data.email,
  )
  if (exists) {
    throw new Error('Ya existe una cuenta con ese usuario o correo.')
  }

  const user = {
    name: data.name,
    email: data.email,
    username: data.username,
    password: data.password,
  }
  setItem(USERS_KEY, [...users, user])
  return toPublic(user)
}

/**
 * Inicia sesión validando las credenciales.
 * @param {{ username: string, password: string }} credentials
 * @returns {Promise<PublicUser>}
 * @throws {Error} Si las credenciales son inválidas.
 */
export async function login({ username, password }) {
  const users = readUsers()
  const found = users.find(
    (u) => (u.username === username || u.email === username) && u.password === password,
  )
  if (!found) {
    throw new Error('Usuario o contraseña incorrectos.')
  }

  const publicUser = toPublic(found)
  setItem(SESSION_KEY, publicUser)
  return publicUser
}

/**
 * Cierra la sesión actual.
 * @returns {Promise<void>}
 */
export async function logout() {
  removeItem(SESSION_KEY)
}

/**
 * Devuelve el usuario autenticado actual, o null si no hay sesión.
 * @returns {PublicUser | null}
 */
export function getCurrentUser() {
  return getItem(SESSION_KEY, null)
}
