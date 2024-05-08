/**
 * Determines the deployment URL based on the environment: local development, preview, or production.
 */
export function getBaseUrl() {
  return process.env.VERCEL_ENV === 'production'
    ? 'https://dx-measure.vercel.app/'
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';
}
