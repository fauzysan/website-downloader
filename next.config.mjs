/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
          {
            protocol: "https",
            hostname:"cdn.mos.cms.futurecdn.net",

          },
          {
            protocol: "https",
            hostname: "download.logo.wine"
          },
          {
            protocol: "https",
            hostname: "cdn.pixabay.com"
          }
        
        ],
      },
};

export default nextConfig;
