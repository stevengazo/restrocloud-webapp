/**
 * Envoltura segura sobre localStorage.
 *
 * Centraliza el acceso al almacenamiento del navegador para que el resto de la
 * app no dependa directamente de la API de `localStorage`. Maneja la
 * serialización JSON y los errores (modo incógnito, cuota llena, etc.).
 *
 * Prefijo de claves para evitar colisiones con otras apps del mismo dominio.
 */
const PREFIX = 'restrocloud:'

const key = (name) => `${PREFIX}${name}`

/**
 * Lee y deserializa un valor del almacenamiento.
 * @template T
 * @param {string} name Nombre lógico de la clave (sin prefijo).
 * @param {T} [fallback] Valor por defecto si no existe o falla la lectura.
 * @returns {T | null}
 */
export function getItem(name, fallback = null) {
  try {
    const raw = localStorage.getItem(key(name))
    return raw === null ? fallback : JSON.parse(raw)
  } catch {
    return fallback
  }
}

/**
 * Serializa y guarda un valor en el almacenamiento.
 * @param {string} name Nombre lógico de la clave (sin prefijo).
 * @param {unknown} value Valor serializable a JSON.
 */
export function setItem(name, value) {
  try {
    localStorage.setItem(key(name), JSON.stringify(value))
  } catch {
    // Almacenamiento no disponible o lleno: se ignora de forma silenciosa.
  }
}

/**
 * Elimina una clave del almacenamiento.
 * @param {string} name Nombre lógico de la clave (sin prefijo).
 */
export function removeItem(name) {
  try {
    localStorage.removeItem(key(name))
  } catch {
    // Sin acción si el almacenamiento no está disponible.
  }
}
