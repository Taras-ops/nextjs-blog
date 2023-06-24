const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = () => {
  if (PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'baraniuktaras',
        mongodb_password: 'baraniuktaras',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site',
      },
    }
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'baraniuktaras',
      mongodb_password: 'baraniuktaras',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  }
}
