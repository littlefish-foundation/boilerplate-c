/**
 * These routes are public and can be accessed by anyone.
 * @type {string[]}
 */

export const publicRoutes = ["/"];

/**
 * These routes are public and can be accessed by anyone.
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * The prefix for all API authentication routes.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";
