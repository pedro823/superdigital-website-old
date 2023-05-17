/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/znx',
        destination: 'https://open.spotify.com/track/3J5hqIWAC82uiLKUAuZuDd?si=9a7a948c686a49ab',
        basePath: false,
        permanent: true
      }
    ]
  }
}
