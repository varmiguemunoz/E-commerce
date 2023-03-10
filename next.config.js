//aqui se puede anadir, valores para comprimir el sitio en gzip, trabajar con redireccion a nivel de servidor 
//tambien configuraciones como variables de entorno y elementos mas avanzados, como agregar pugling y elementos de 3ros.


//se pueden anadir, cosas tan importantes como agregar rutas, ejemplo en el script async
// const { redirect } = require('next/dist/server/api-utils')



/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'wixmp.com', 'romapy', "cdn.pixabay.com", "images.pexels.com"],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  include: ['production'],
  register: true,
});

module.exports = withPWA(nextConfig);

