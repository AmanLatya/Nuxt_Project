// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Global CSS
  css: [
    'bootstrap/dist/css/bootstrap.min.css', // Bootstrap CSS
  ],

  // Plugins
  plugins: [
    // Add custom plugins if needed
  ],

  // Build settings
  build: {
    transpile: [
      // Add any required dependencies for server-side rendering
    ],
  },

  // Include external scripts in the head section
  app: {
    head: {
      title:'NUXT PROJECT From scratch',
      link: [{
        rel: 'stylesheet',
        href: '/css/custom.css'
      },
      {
        rel: 'icon', 
        type:'image/x-icon', 
        href:'/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: '/css/bootstrap.min.css'
      }],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript',
          integrity: 'sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+e67E/jUht/8tUCOm9TO4t8Mog',
          crossorigin: 'anonymous',
        },
        {
          src:'/js/bootstrap.bundle.min.js',
          type:'text/javascript'
        },
      ],
    },
  },

  // Optionally include runtime configurations
  runtimeConfig: {
    // Public or private runtime configurations can go here
  },
});
