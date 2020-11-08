module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8003),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '1ff9e8bc6a994443c36bae131db66050'),
    },
  },
});
