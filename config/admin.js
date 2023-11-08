module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "b4dbad35-6caa-4f84-be56-90d0d3bc2fdf"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "d9b0df66ff97a666027e665707b4e3e7"),
  },
  transfer: {
    token: {
      salt: "d9b0df66ff97a666027e665707b4e3e7ssddds",
    },
  },
});
