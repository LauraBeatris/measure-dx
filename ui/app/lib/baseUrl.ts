/**
 * Determines the deployment URL based on the environment: local development, preview, or production.
 */
export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? 'https://measure-dx.com'
    : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'http://localhost:3000';
}
