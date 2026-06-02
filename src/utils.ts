/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function getApiUrl(path: string): string {
  // Access the environment variable dynamically.
  // Note: Vite exposes these variables prefixed with VITE_.
  const meta = import.meta as unknown as { env?: Record<string, string> };
  const backendUrl = meta.env?.VITE_BACKEND_URL;
  if (backendUrl) {
    const base = backendUrl.endsWith('/') ? backendUrl.slice(0, -1) : backendUrl;
    const cleanPath = path.startsWith('/') ? path : '/' + path;
    return `${base}${cleanPath}`;
  }
  return path;
}
