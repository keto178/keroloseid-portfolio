/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/About",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/Projects",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/Blog",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/Contact",
        permanent: true,
      },
    ];
  },

};

export default nextConfig;
