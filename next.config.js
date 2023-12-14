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
      },
      {
        source: '/whispers',
        destination: 'https://open.spotify.com/track/0u4mBVSqA0ehUWgamYdtwp?si=d9b99467e0d4468d',
        basePath: false,
        permanent: true
      }
    ]
  }
}
