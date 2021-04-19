module.exports = {
  env: {
    STRAPI_GRAPHQL_URL: 'https://rocky-ocean-85600.herokuapp.com/graphql',
    STRAPI_URL: 'https://rocky-ocean-85600.herokuapp.com',
    SERVICE_ID: 'service_x1vtaeg',
    TEMPLATE_ID: 'template_a3ki6qb',
    USER_ID: 'user_fcLsvvjdcR8yEn0OQzA26'
  },
  future: {
    webpack5: true,
  },

  images: {
    domains: ["res.cloudinary.com", "cloudinary.com", "images.unsplash.com", "unsplash.com", "localhost"],
    loader: 'default',

  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};
