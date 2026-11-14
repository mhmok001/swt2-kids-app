/**
 * An object containing the application's main route paths as constants.
 *
 * @remarks
 * This constant provides a centralized location for defining and referencing
 * the key routes used throughout the frontend application. Each property
 * represents a specific route, making it easier to maintain and update
 * navigation paths in a single place.
 *
 * @property {string} HOME - The route path for the home page (`'/'`).
 * @property {string} MAP - The route path for the map page (`'/karte'`).
 * @property {string} LOGIN - The route path for the login page (`'/anmeldung'`).
 *
 * @example
 * ```typescript
 * import { ROUTES } from 'shared/constants/routes';
 * 
 * // Navigate to the login page
 * navigate(ROUTES.LOGIN);
 * ```
 *
 * @readonly
 */
export const ROUTES = {
    HOME: '/',
    LOGIN: '/anmeldung',
    MAP: 'karte'
} as const;