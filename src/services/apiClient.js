/**
 * Cliente HTTP (placeholder para la futura API).
 *
 * Hoy la app funciona con localStorage, así que este cliente NO se usa todavía.
 * Está aquí para que la migración al backend sea un cambio localizado: cuando
 * tengas tu API, define `VITE_API_URL` en un `.env` y reescribe los servicios
 * (p. ej. authService) para que usen `request()` en lugar de `storage`.
 *
 * Uso futuro previsto:
 *   const user = await request('/auth/login', { method: 'POST', body: credentials })
 */

const BASE_URL = import.meta.env?.VITE_API_URL ?? ''

/**
 * Realiza una petición JSON a la API.
 * @param {string} path Ruta relativa (p. ej. '/auth/login').
 * @param {{ method?: string, body?: unknown, headers?: Record<string, string> }} [options]
 * @returns {Promise<any>}
 * @throws {Error} Si la respuesta no es satisfactoria.
 */
export async function request(path, { method = 'GET', body, headers } = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json', ...headers },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!response.ok) {
    const message = await response.text().catch(() => response.statusText)
    throw new Error(message || `Error ${response.status}`)
  }

  return response.status === 204 ? null : response.json()
}
